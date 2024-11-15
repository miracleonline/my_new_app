const User = require('../models/User');

exports.shareLocation = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;

    const user = await User.findById(req.user.id);
    if (user.coins < 1) {
      return res.status(400).json({ msg: 'Not enough coins to share location' });
    }

    user.location = { latitude, longitude };
    user.coins -= 1;
    await user.save();

    const locationUrl = `https://maps.google.com/?q=${latitude},${longitude}`;
    res.json({ locationUrl });
  } catch (err) {
    res.status(500).send('Server error');
  }
};
