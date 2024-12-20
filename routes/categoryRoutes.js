JavaScript
const express = require('express');
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.post('/', authMiddleware.verifyToken, roleMiddleware.isAdmin, categoryController.createCategory);
router.put('/:id', authMiddleware.verifyToken, roleMiddleware.isAdmin, categoryController.updateCategory);
router.delete('/:id', authMiddleware.verifyToken, roleMiddleware.isAdmin, categoryController.deleteCategory);

module.exports = router;
