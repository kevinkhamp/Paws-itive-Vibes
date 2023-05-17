// ~!!!~ Start of Leo's Code ~!!!~

const Pet = require(".../models");

// GET all the pets for Pet page
router.get("/", async (req, res) => {
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
router.get("/pet/:id", withAuth, async (req, res) => {
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
