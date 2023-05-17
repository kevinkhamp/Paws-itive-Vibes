const router = require('express').Router()
const donationsRoute = require('./donations')
const donorRoute = require('./donorRoutes')
const wishlistRoute = require('./wishlistRoute')

router.use('/donations', donationsRoute)
router.use('/login', donorRoute)
router.use('/wishlist', wishlistRoute)

module.exports = router