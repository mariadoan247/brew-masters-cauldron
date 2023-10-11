const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Load input validation
const validateRegisterInput = require("../validation/signUp");
const validateLoginInput = require("../validation/signIn");

// Load User model
const User = require("../models/user");

const axios = require("axios");

const apiKey = keys.apiKey;

router.post("/insertOne", async (req, res) => {
  try {
      console.log("Received signup request");

      const { errors, isValid } = await validateRegisterInput(req.body.document);
      if (!isValid) return res.status(400).json(errors);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.document.password, salt);
    const newUser = new User({
      name: req.body.document.name,
      email: req.body.document.email,
      password: hashedPassword
    });

    const response = await axios.post('https://us-east-2.aws.data.mongodb-api.com/app/data-iudir/endpoint/data/v1/action/insertOne', {
      collection: "users",
      database: "5e-compendium",
      dataSource: "brewmasters-cauldron",
      document: newUser
    }, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error processing the request." });
  }
});


router.post("/signin", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;