// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const {
  signup,
  login,
  microsoftOAuthCallback,
} = require('../controllers/authController');
const User = require('../models/User');

// Standard signup for student/admin
router.post('/signup', signup);

// Standard login for all roles.
router.post('/login', login);

// Microsoft OAuth (placeholders)
// In a real app, you'd use Passport.js or similar to handle this.
router.get('/microsoft', (req, res) => {
  // Start Microsoft OAuth flow.
  res.send('Redirecting to Microsoft OAuth...');
});
router.get('/microsoft/callback', microsoftOAuthCallback);

router.get('/check-admin', async (req, res) => {
  try {
    const admin = await User.findOne({ email: process.env.ADMIN_EMAIL });
    res.json({
      exists: !!admin,
      email: process.env.ADMIN_EMAIL,
      role: admin?.role
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
