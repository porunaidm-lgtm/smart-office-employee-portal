const authorize = (roles = []) => {
  return (req, res, next) => {
    // 🛡️ authMiddleware must run first
    if (!req.user || !req.user.role) {
      return res.status(401).json({
        message: "Unauthorized: No user role",
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    next();
  };
};

module.exports = authorize;
