import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

/**
 * @description Auth user & get token
 * @route       POST /api/users/login
 * @access      Public
 */
const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
}

/**
 * @description Register user
 * @route       POST /api/users
 * @access      Public
 */
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  // Check for user existence via email
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists.');
  } else {
    // Create a new user if the email doesn't exist

    const user = await User.create({
      name,
      email,
      password,
    });
    if (user) {
      generateToken(res, user._id);
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data.');
    }
  }
}

/**
 * @description Log out user & clear cookie
 * @route       POST /api/users/logout
 * @access      Private
 */
const logoutUser = async (req, res) => {
  // Clear the JWT cookie
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'logged out successfully' });
}

/**
 * @description Get user profile
 * @route       GET /api/users/profile
 * @access      Private
 */
const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
}

/**
 * @description Update user profile
 * @route       PUT /api/users/profile
 * @access      Private
 */
const updateUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  }
}

/**
 * @description Get all users
 * @route       GET /api/users
 * @access      Private/Admin
 */
const getAllUsers = async (req, res) => {
  const pageSize = process.env.PAGINATION_LIMIT;
  const page = Number(req.query.pageNumber) || 1;
  const count = await User.countDocuments();
  const users = await User.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.status(200).json({ users, page, pages: Math.ceil(count / pageSize) });
}

/**
 * @description Get one user
 * @route       GET /api/users/:id
 * @access      Private/Admin
 */
const getUser = async (req, res) => {
  // Fetch the user without their password
  const user = await User.findById(req.params.id).select('-password');

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
}

/**
 * @description Delete one user
 * @route       DELETE /api/users/:id
 * @access      Private/Admin
 */
const deleteUser = async (req, res) => {
  console.log('Hello from /api/users/:id delete');
  const user = await User.findById(req.params.id);
  if (user) {
    if (user.isAdmin) {
      res.status(400);
      throw new Error('Cannot delete admin user');
    }
    await User.deleteOne({ _id: user._id });
    res.status(200).json({ message: 'User successfully deleted.' });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
}

/**
 * @description Update one user
 * @route       PUT /api/users/:id
 * @access      Private/Admin
 */
const updateUser = async (req, res) => {
  console.log('Hello from /api/users/:id update');
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin || user.isAdmin;

    const updatedUser = await user.save();
    res.status(200).json({
      _id: updateUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
}

export {
  authUser,
  registerUser,
  logoutUser,
  getUser,
  getUserProfile,
  getAllUsers,
  updateUser,
  updateUserProfile,
  deleteUser,
};
