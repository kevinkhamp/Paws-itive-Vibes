const router = require("express").Router(); //using the express npm package

const { Human } = require("../../models"); // Requires the human table in the models folder
// Get all donors
router.get("/", async (req, res) => {
  //Try catch Error to get all donors.
  try {
    const donnorData = await Human.findAll({
      include: [{ model: Human }],
    });
    res.status(200).json(donnorData);
  } catch (err) {
    res.status(500).json(err);
  }
});
