JavaScript
const express = require('express');
const reviewController = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

router.get('/', reviewController.getAllReviews);
router.get('/:id', reviewController.getReviewById);
router.post('/', authMiddleware.verifyToken, roleMiddleware.isUser, reviewController.createReview);
router.put('/:id', authMiddleware.verifyToken, roleMiddleware.isUser, reviewController.updateReview);
router.delete('/:id', authMiddleware.verifyToken, roleMiddleware.isUser, reviewController.deleteReview);

module.exports = router;
