const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
    let token;

    // Check if the request has an authorization header and it starts with 'Bearer'
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    // If no token is found, respond with a 401 error
    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Retrieve the user associated with the token
        req.user = await User.findById(decoded.userId).select('-password'); // Exclude password from the response
        if (!req.user) {
            return res.status(401).json({ message: 'Not authorized, user not found' });
        }

        // Continue to the next middleware or route handler
        next();
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(401).json({ message: 'Not authorized, token failed' });
    }
};
