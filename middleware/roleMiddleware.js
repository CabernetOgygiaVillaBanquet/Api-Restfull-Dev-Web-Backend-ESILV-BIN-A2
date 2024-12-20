exports.isAdmin = (req, res, next) => {
  if (req.userRole !== 'admin') {
    return res.status(403).json({ message: 'Require admin role' });
  }
  next();
};

exports.isUser = (req, res, next) => {
  if (req.userRole !== 'user') {
    return res.status(403).json({ message: 'Require user role' });
  }
  next();
};
