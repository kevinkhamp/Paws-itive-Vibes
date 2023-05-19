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
// router.get('/:id', async (req,res) => {
//     try {
//         const donData = await Donations.findByPK(req.params.id)
//         console.log(donData)
//         const donations = donData.get({ plain:true })
//         res.render('donations',{donations})
//     } catch (err) {
//         res.status(500)
//     }
// })

// Route to post a new donation
// POST request works in Insomnia but not on the website
// POST request @ http://localhost:3001/api/donations/
router.post('/', async (req,res) => {
    try {
        const newDonation = await Donations.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            donation: req.body.donation,
            date: req.body.date
        })
        console.log(newDonation)
        res.status(200).json(newDonation)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router