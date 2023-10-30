const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const keys = require("../config/keys");

// Load input validation
const validateRegisterInput = require("../validation/signUp");
const validateLoginInput = require("../validation/signIn");

// Load User model
const User = require("../models/user");

const axios = require("axios");

const apiKey = keys.apiKey;
const url = keys.url;

router.post("/insertOne", async (req, res) => {
  try {
    console.log("Received sign up request");

    const { errors, isValid } = await validateRegisterInput(req.body.document);
    if (!isValid) return res.status(400).json(errors);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.document.password, salt);
    const newUser = new User({
      name: req.body.document.name,
      email: req.body.document.email,
      password: hashedPassword
    });

    const response = await axios.post(url + '/insertOne', {
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


router.post("/findOne", async (req, res) => {
  try {
    console.log("Received sign in request");

    // Form validation
    const { errors, isValid, user } = await validateLoginInput(req.body.filter);
    if (!isValid) return res.status(400).json(errors);

    // If validation was successful and user exists
    if (user && user.document) {
      // Create JWT Payload
      const payload = {
          id: user.document.id,
          name: user.document.name,
          email: user.document.email
      };

      // Sign token
      jwt.sign(
          payload,
          keys.secretOrKey,
          {
              expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
              if (err) {
                  res.status(500).json({ error: "Error signing the token." });
                  return;
              }

              res.json({
                  success: true,
                  token: "Bearer " + token
              });
          }
      );
    } else {
      res.status(400).json({ error: "User not found or invalid password." });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error processing the request." });
  }
});

module.exports = router;