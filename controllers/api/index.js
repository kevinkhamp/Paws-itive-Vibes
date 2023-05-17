const router = require("express").Router();
const donationsRoute = require("./donations");
const donorRoute = require("./donorRoutes");
const wishlistRoute = require("./wishlistRoute");
const petRoutes = require("./petRoutes.js");

router.use("/donations", donationsRoute);
router.use("/login", donorRoute);
router.use("/wishlist", wishlistRoute);
router.use("/pet", petRoutes);

module.exports = router;
