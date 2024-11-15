const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Sign-up function
exports.signUp = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Password length validation
        if (password.length < 6) {
            return res.status(400).json({ msg: 'Password must be at least 6 characters long' });
        }

        // Create new user
        user = new User({ email, password });

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Save the user
        await user.save();

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h', // Adjust token expiration as needed
        });

        // Send token back to frontend
        res.status(201).json({ token });

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' }); // Updated to consistent error response
    }
};

// Login function
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h', // Adjust token expiration as needed
        });

        // Send token back to frontend
        res.json({ token });

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' }); // Updated to consistent error response
    }
};
