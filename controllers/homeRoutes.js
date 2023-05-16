const router = require("express").Router();

// Renders the homepage.handlebars template
router.get("/", async (req, res) => {
  res.render("homepage");
});

module.exports = router;
