const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./constants');
const db = require('../models');

const authMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
      res.status(401).send('Not authorized');
      return;
    }
  
    const token = authorization.replace('Bearer ', '');
  
    let data;
    try {
      data = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      res.status(401).send('Invalid token');
      return;
    }
  
    const user = await db.User.findByPk(data.userId);
  
    if (user) {
      req.user = user.dataValues;
      next();
    }
    else {
      res.status(401).send('Not authorized');
    }
};

module.exports = authMiddleware;