// Import jwt for token generation
import jwt from 'jsonwebtoken';

// Function to generate a JWT token and set it as an HTTP-only cookie
const generateToken = (res, userId) => {
  // Create a JWT token
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '1d', // Token expires in 1 day
  });

  // Set the JWT as an HTTP-only cookie
  // This prevents client-side JavaScript from accessing the token, improving security
  res.cookie('jwt', token, {
    httpOnly: true, // Cookie can't be accessed by client-side script
    secure: process.env.NODE_ENV !== 'development', // Use HTTPS in production
    sameSite: 'strict', // Strict same-site policy for cookie
    maxAge: 24 * 60 * 60 * 1000, // Cookie expires in 24 hours (in milliseconds)
  });
};

// Export the function for use in other parts of the application
export default generateToken;
