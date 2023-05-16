const router = require('express').Router();
const Donations = require('../models/Donations');

// Router to get all donations
// Not sure if /donations is needed
router.get('/donations', async (req,res) => {
    const donData = await Donations.findAll().catch((err) => {
        res.json(err)
    })
    const donations = donData.map((donation) => donation.get({ plain:true }))
    res.render('all', {donations})
})

// // Router to get one donation
// router.get('/donations/:id', async (req,res) => {
//     try {
//         const donData = await Donations.findByPK(req.params.id)
//         if (!donData) {
//             res.status(404).json({ message: 'No donations!'})
//             return
//         }
//         const donation = donData.get({ plain:true })
//         res.render('donations',donation)
//     } catch (err) {
//         res.status(500)
//     }
// })

// Route to post a new donation
router.post('/donations', async (req,res) => {
    try {
        const newDonation = await Donations.create({
            ...req.body,
        })
        res.status(200).json(newDonation)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router