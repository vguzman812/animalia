import Express from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDb from './config/db.js';
import factRoutes from './routes/factRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';
import path from 'path';

// Initialize port from environment variables or use 8888 as default
const port = process.env.PORT || import.meta.env.PORT || 8888;

// Connect to database
connectDb();

// Initialize Express application
const app = Express();

// Middleware for parsing JSON and URL-encoded data
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// Middleware for parsing cookies
app.use(cookieParser());

// Define API routes for facts and users
app.use('/api/facts', factRoutes);
app.use('/api/users', userRoutes);

// Get directory name for the current module
const __dirname = path.resolve();

// Check if app is running in production environment
if (process.env.NODE_ENV === 'production' || import.meta.env.MODE === 'production') {
  // Set the static folder for serving frontend files
  app.use(Express.static(path.join(__dirname, '/frontend/dist')));

  // Any undefined route will serve index.html file
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  // Basic route for the root URL
  app.get('/', (req, res) => {
    console.log('Hello from /');
    res.send('API running');
  });
}

// Middleware for handling 404 not found errors
app.use(notFound);

// Middleware for handling other errors
app.use(errorHandler);

// Start the Express server
app.listen(port, () => console.log(`Server running on ${port}`));
