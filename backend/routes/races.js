const express = require("express");
const router = express.Router();
const keys = require("../config/keys");

const axios = require("axios");

const apiKey = keys.apiKey;
const url = keys.url;

router.post("/fetchRaces", async (req, res) => {
    try {
        console.log("Received fetch races request");

        const races = await axios.post(url + '/find', {
            collection: req.body.collection,
            database: req.body.database,
            dataSource: req.body.dataSource
        }, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey
            }
        });

        // If the user exists
        if (races && races.data.documents) {
            // Return the races directly
            res.json(races.data.documents);
        } else {
            res.status(400).json({ error: "Races not found." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error processing the request." });
    }
});

module.exports = router;