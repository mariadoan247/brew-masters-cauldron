const express = require("express");
const router = express.Router();
const keys = require("../config/keys");

const axios = require("axios");

const apiKey = keys.apiKey;
const url = keys.url;

router.post("/fetchMonsters", async (req, res) => {
    try {
        console.log("Received fetch monsters request");

        const monsters = await axios.post(url + '/find', {
            collection: req.body.collection,
            database: req.body.database,
            dataSource: req.body.dataSource
        }, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey
            }
        });

        // If the monster exists
        if (monsters && monsters.data.documents) {
            // Return the monsters directly
            res.json(monsters.data.documents);
        } else {
            res.status(400).json({ error: "Monsters not found." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error processing the request." });
    }
});

module.exports = router;