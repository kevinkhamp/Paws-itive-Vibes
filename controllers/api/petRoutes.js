
const router = require("express").Router();
// ~!!!~ Start of Leo's Code ~!!!~
const Pet = require("../../models");

// GET all the pets for Pet page
// GET reqest @ http://localhost:3001/api/pets
router.get("/", async (req, res) => {
  console.info('GET request at /api/pets is working');
  try {
    const dbPetData = await Pet.Findall({
      include: [
        {
          Model: Pet,
          attributes: ["id", "pet_name"],
        },
      ],
    });

    const petGallery = dbPetData.map((petGallery) =>
      petGallery.get({ plain: true })
    );

    res.render("pets", {
      pet,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get one Pet
// GET request @ http://localhost:3001/api/pets/:id
router.get("/:id", async (req, res) => {
  try {
    const dbPetData = await Pet.findByPK(req.params.id, {
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

// ~!!!~ End of Leo's Code ~!!!~
module.exports = router;