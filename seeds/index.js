const sequelize = require('../config/connection');

const Human = require('../models/Human');
const Pets = require('../models/Pets');
const Donations = require('../models/Donations');
const Sponsor = require('../models/Sponsor');
const Wishlist = require('../models/Wishlist');

const humanData = require('./humanData.json');
const petData = require('./petsData.json');
const donationsData = require('./donationData.json');
const sponsorData = require('./sponsorData.json');
const wishlistData = require('./wishData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Human.bulkCreate(humanData, {
    individualHooks: true,
    returning: true,
  });

  await Pets.bulkCreate(petData, {
    individualHooks: true,
    returning: true,
  });

  await Donations.bulkCreate(donationsData, {
    individualHooks: true,
    returning: true,
  });

  await Sponsor.bulkCreate(sponsorData, {
    individualHooks: true,
    returning: true,
  });
  
  await Wishlist.bulkCreate(wishlistData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();