const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    // console.log('token', token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded)
    const user = await User.findOne({
      _id: decoded._id,
      'tokens.token': token
    });
    // console.log('user', user);
    if (!user) {
      throw new Error();
    }
    // console.log('user', user);
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    // console.log(error);
    res.status(401).send({ error: 'Please authenthicated' });
  }
};

module.exports = auth;
