const router = require('express').Router()
const donationsRoute = require('./donations')
const donorRoute = require('./donorRoutes')
const wishlistRoute = require('./wishlistRoute')
const petRoute = require('./petRoutes')

// This folder is http://localhost:3001/api

// http://localhost:3001/api/donations
router.use('/donations', donationsRoute)

// http://localhost:3001/api/donor
router.use('/donor', donorRoute)

// http://localhost:3001/api/wishlist
router.use('/wishlist', wishlistRoute)

// http://localhost:3001/api/pets
router.use('/pets', petRoute)

module.exports = router