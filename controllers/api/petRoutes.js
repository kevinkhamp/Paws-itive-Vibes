// ~!!!~ Start of Leo's Code ~!!!~

const { Pets } = require("../../models");
const router = require("express").Router();

// GET all the pets for Pet page
router.get("/", async (req, res) => {
  try {
    const dbPetData = await Pets.findAll({
      // include: {
      // model: Pets,
      // attributes: ["id", "pet_name"],
      // },
    });
    // console.log(dbPetData);

    const petGallery = dbPetData.map((petGallery) =>
      petGallery.get({ plain: true })
    );

    console.log(petGallery);

    res.render("pets", {
      petGallery,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get one Pet
router.get("/pet/:id", async (req, res) => {
  try {
    const dbPetData = await Pets.findByPK(req.params.id, {
      include: [
        {
          model: Pet,
          attributes: ["id", "pet_name", "bio"],
        },
      ],
    });

    const petGallery = dbPetData.get({ plain: true });
    res.render("pet", { pet });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
// ~!!!~ End of Leo's Code ~!!!~
