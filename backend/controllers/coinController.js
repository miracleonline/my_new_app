const User = require('../models/User');

exports.getCoins = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({ coins: user.coins });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.earnCoins = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.coins += req.body.coins;
    await user.save();
    res.json({ coins: user.coins });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.spendCoins = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.coins < req.body.coins) {
      return res.status(400).json({ msg: 'Not enough coins' });
    }

    user.coins -= req.body.coins;
    await user.save();
    res.json({ coins: user.coins });
  } catch (err) {
    res.status(500).send('Server error');
  }
};
