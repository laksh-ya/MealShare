// backend/controllers/userController.js
const User = require('../models/User');

// Admin: Get a list of all users.
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Admin: Create a guard account manually.
exports.createGuard = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Force role to 'guard'
    const guard = await User.create({ name, email, password, role: 'guard' });
    res.status(201).json(guard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};
