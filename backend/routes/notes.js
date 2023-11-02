const express = require("express");
const router = express.Router();
const keys = require("../config/keys");

// Load User model
const User = require("../models/user");

const axios = require("axios");

const apiKey = keys.apiKey;
const url = keys.url;

router.post("/createNewNote", async (req, res) => {
  try {
    console.log("Received new note request");

    const response = await axios.post(url + '/updateOne', {
        collection: req.body.collection,
        database: req.body.database,
        dataSource: req.body.dataSource,
        filter: req.body.filter,
        update: req.body.update
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


router.post("/updateNote", async (req, res) => {
  try {
    console.log("Received update note request");

    const updatedNote = new Note({
        details: req.body.document.details,
        dateEdited: req.body.document.dateEdited
    });

    const response = await axios.post(url + '/updateOne', {
        collection: "users",
        database: "5e-compendium",
        dataSource: "brewmasters-cauldron",
        filter: {
            email: email
        },
        update: {
            set: updatedNote
        }
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

router.post("/deleteOne", async (req, res) => {
    try {
      console.log("Received delete note request");
  
      const response = await axios.post(url + '/deleteOne', {
          collection: "notes",
          database: "5e-compendium",
          dataSource: "brewmasters-cauldron",
          filter: {
              email: email
          }
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

module.exports = router;