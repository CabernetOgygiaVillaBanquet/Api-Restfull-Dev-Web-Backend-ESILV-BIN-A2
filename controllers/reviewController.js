const Review = require('../models/review');

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getReviewById = async (req, res) => {
  const { id } = req.params;
  try {
    const review = await Review.findByPk(id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createReview = async (req, res) => {
  const { rating, comment, userId, productId } = req.body;
  try {
    const review = await Review.create({ rating, comment, userId, productId });
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateReview = async (req, res) => {
  const { id } = req.params;
  const { rating, comment, userId, productId } = req.body;
  try {
    const review = await Review.findByPk(id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    review.rating = rating;
    review.comment = comment;
    review.userId = userId;
    review.productId = productId;
    await review.save();
    res.json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteReview = async (req, res) => {
  const { id } = req.params;
  try {
    const review = await Review.findByPk(id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    await review.destroy();
    res.json({ message: 'Review deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
