const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Wishlist, Human, Donations, Pets, Sponsor } = require('../../models');

// GET request @ http://localhost:3001/api/wishlist
router.get('/', async (req, res) => {
  try {
    const wishlistData = await Wishlist.findAll().catch((err) => {
      res.json(err);
    });
    const wishes = wishlistData.map((wish) => wish.get({ plain: true}));
    res.render('wishlist', {wishes});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
