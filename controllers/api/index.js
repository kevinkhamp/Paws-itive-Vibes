const router = require('express').Router()
const donationsRoute = require('./donations')
const wishlistRoutes = require('./wishlistRoute')

router.use('/donations', donationsRoute)
router.use('/wishlist', wishlistRoutes)

module.exports = router