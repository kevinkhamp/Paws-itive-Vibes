const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Wishlist, Human, Donations, Pets, Sponsor } = require('../../models');

router.get('/', async (req, res) => {
  try {
    res.render('wishlist');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
