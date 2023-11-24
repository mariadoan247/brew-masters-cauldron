const express = require("express");
const router = express.Router();
const keys = require("../config/keys");

const axios = require("axios");

const apiKey = keys.apiKey;
const url = keys.url;

router.post("/fetchBackgrounds", async (req, res) => {
    try {
        console.log("Received fetch backgrounds request");

        const backgrounds = await axios.post(url + '/find', {
            collection: req.body.collection,
            database: req.body.database,
            dataSource: req.body.dataSource
        }, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey
            }
        });

        // If the background exists
        if (backgrounds && backgrounds.data.documents) {
            // Return the backgrounds directly
            res.json(backgrounds.data.documents);
        } else {
            res.status(400).json({ error: "Backgrounds not found." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error processing the request." });
    }
});

module.exports = router;