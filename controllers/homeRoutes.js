const router = require('express').Router();

// Renders the homepage.handlebars template
// GET request @ http://localhost:3001/
router.get('/', async (req, res) => {
  res.render('homepage');
});

module.exports = router;
