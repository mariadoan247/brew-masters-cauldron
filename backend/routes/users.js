const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../validation/signUp");
const validateLoginInput = require("../validation/signIn");

// Load User model
const User = require("../models/user");

const axios = require("axios");

router.post("/insertOne", (req, res) => {
  // Form validation
  console.log("Received signup request");
  
  const { errors, isValid } = validateRegisterInput(req.body.document);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  
  User.findOne({ email: req.body.document.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.document.name,
        email: req.body.document.email,
        password: req.body.document.password
      });
      
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          // Now, send the user to MongoDB's API:
          axios.post('https://us-east-2.aws.data.mongodb-api.com/app/data-iudir/endpoint/data/v1/action/insertOne', {
            collection: "users",
            database: "5e-compendium",
            dataSource: "brewmasters-cauldron",
            document: newUser
          }, {
            headers: {
              'Content-Type': 'application/json',
              'api-key': 'p0OQjP17ejlY65NAGaytJpVEoIFeWhWa1ecUk6OfW4sEj9x6qDXhJ4IUodYjpS8B'
            }
          })
          .then(response => {
            res.json(response.data);
          })
          .catch(error => {
            console.log(error);
            res.status(500).json({ error: "Error saving user to MongoDB Atlas." });
          });
        });
      });
    }
  });
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