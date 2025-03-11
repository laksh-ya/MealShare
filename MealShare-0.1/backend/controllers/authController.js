const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Utility: Generate JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

// Signup for student/admin (guards are created by admin)
exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Prevent admin/staff signup via regular route
    if (role === 'admin' || role === 'staff') {
      return res.status(400).json({
        message: 'Invalid role specified.',
      });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    const user = await User.create({
      name,
      email,
      password,
      role: 'user',  // Default role
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};

// Login for all roles
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user),
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Microsoft OAuth callback (placeholder)
// Integration with Passport.js (or another library) is recommended.
exports.microsoftOAuthCallback = async (req, res) => {
  // Assuming req.user is set by your OAuth middleware.
  let user = await User.findOne({ email: req.user.email });
  if (!user) {
    user = await User.create({
      name: req.user.name,
      email: req.user.email,
      role: 'student',
      isOAuth: true,
    });
  }
  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: generateToken(user),
  });
};

// Add this to ensure admin exists on server start
exports.ensureAdminExists = async () => {
  try {
    const adminExists = await User.findOne({ email: process.env.ADMIN_EMAIL });
    if (!adminExists) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, salt);
      
      await User.create({
        name: 'Admin',
        email: process.env.ADMIN_EMAIL,
        password: hashedPassword,
        role: 'admin',
      });
      console.log('Admin account created successfully');
    }
  } catch (error) {
    console.error('Error ensuring admin exists:', error);
  }
};
