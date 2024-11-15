const express = require('express');
const { shareLocation } = require('../controllers/locationController');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/share', authMiddleware, shareLocation);

module.exports = router;
