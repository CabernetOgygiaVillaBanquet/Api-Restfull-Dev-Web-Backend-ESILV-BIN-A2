JavaScript
const express = require('express');
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', authMiddleware.verifyToken, roleMiddleware.isAdmin, productController.createProduct);
router.put('/:id', authMiddleware.verifyToken, roleMiddleware.isAdmin, productController.updateProduct);
router.delete('/:id', authMiddleware.verifyToken, roleMiddleware.isAdmin, productController.deleteProduct);

module.exports = router;
