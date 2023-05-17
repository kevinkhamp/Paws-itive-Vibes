const router = require('express').Router();
const { Donations }= require('../../models');

// Router to get all donations
// GET request @ http://localhost:3001/api/donations/
router.get('/', async (req,res) => {
    const donData = await Donations.findAll().catch((err) => {
        res.json(err)
    })
    const donations = donData.map((donation) => donation.get({ plain:true }))
    // console.log(donations)
    res.render('donations', {donations})
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
// POST request @ http://localhost:3001/api/donations/
router.post('/', async (req,res) => {
    try {
        const newDonation = await Donations.create({
            date: donations.date,
            donation: donations.donation
        })
        res.status(200).json(newDonation)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router