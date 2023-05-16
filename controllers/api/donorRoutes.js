const router = require("express").Router(); //using the express npm package

const { Human } = require("../../models"); // Requires the human table in the models folder

//Creating a login post request for users to log in if they donated before

router.post("/login", async (req, res) => {
  try {
    const humanData = await Human.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!humanData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await humanData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: humanData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout for the donor
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// New user account creation for donor.

router.post("/", async (req, res) => {
  try {
    const newUser = await Human.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(newUser);
    });
  } catch {
    console.log(err);
    res.status(500).json(err);
  }
});

//exports to use the router

module.exports = router;
