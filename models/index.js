const Human = require('./Human');
const Pets = require('./Pets');
const Donations = require('./Donations');
const Sponsor = require('./Sponsor');
const Wishlist = require('./Wishlist');

// Human.hasMany(Donations, {
//     foreignKey: 'donator_id',
// });

// Donations.belongsTo(Human, {
//     foreignKey: 'donator_id',
// });

// Wishlist.hasMany(Pets, {
//     foreignKey: 'pet_id',
// });

// Sponsor.hasMany(Pets, {
//     forgeinKey: 'pet_name',
// });

// Sponsor.hasMany(Human, {
//     forgeinKey: 'human_id',
// });

module.exports = { Donations, Human, Pets, Sponsor, Wishlist };
