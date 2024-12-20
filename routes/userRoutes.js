JavaScript
const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

router.get('/', authMiddleware.verifyToken, roleMiddleware.isAdmin, userController.getAllUsers);
router.get('/:id', authMiddleware.verifyToken, roleMiddleware.isAdmin, userController.getUserById);
router.put('/:id', authMiddleware.verifyToken, roleMiddleware.isAdmin, userController.updateUser);
router.delete('/:id', authMiddleware.verifyToken, roleMiddleware.isAdmin, userController.deleteUser);

module.exports = router;
