 
 
const UserModel = require('../models/Users'); // We need the User model to find users by email
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');
 
const AuthenticationController = {
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and password are required.' });
      }

      const user = await UserModel.findOne({email}).populate('authentication');
      
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found', user:user });
      }
      if (!user.authentication) {
          return res.status(401).json({ success: false, message: 'Authentication details not found for user.' });
      }

      // Check password
      const isPasswordValid = await bcrypt.compare(req.body.password, user.authentication.password);

      if (!isPasswordValid) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }

      // Prepare user object for the response, removing sensitive data
      const userObject = user.toObject();
      delete userObject.authentication;
      // Also transform _id to id for consistency if you like
      userObject.id = userObject._id;
      delete userObject._id;
      const token = jwt.sign({ id: user._id, email: user.email }, config.JWT_SECRET, { expiresIn: config.EXPIRES_IN });
      res.json({ success: true, message: 'Logged in successfully', token, user: userObject });
    } catch (error) {
      console.error(`Error in login:`, error);
      next(error);
    }
  },
  //tokenverification
  verifyToken: (req, res, next) => {  
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, config.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      console.error(`Error in verifyToken:`, error);
      res.status(401).json({ success: false, message: 'Invalid token' });
    }
  }
};

module.exports = AuthenticationController;
