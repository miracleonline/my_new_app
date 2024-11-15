const express = require('express');
const { getCoins, earnCoins, spendCoins } = require('../controllers/coinController');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.get('/', authMiddleware, getCoins);
router.post('/earn', authMiddleware, earnCoins);
router.post('/spend', authMiddleware, spendCoins);

module.exports = router;
