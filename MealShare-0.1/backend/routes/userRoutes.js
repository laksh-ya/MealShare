// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getUsers, createGuard } = require('../controllers/userController');
const { protect, authorizeRoles } = require('../middlewares/authMiddleware');

// Protect all routes in this file and only allow admin access.
router.use(protect);
router.use(authorizeRoles('admin'));

// Get all users.
router.get('/', getUsers);

// Create a guard account.
router.post('/guard', createGuard);

module.exports = router;
