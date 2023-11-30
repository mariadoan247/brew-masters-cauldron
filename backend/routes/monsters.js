// use Express to create a router, enabling the program to handle different routes separately
const express = require("express");
const router = express.Router();
const keys = require("../config/keys");

const axios = require("axios");

const apiKey = keys.apiKey;
const url = keys.url;

// define a POST route at /fetchMonsters
router.post("/fetchMonsters", async (req, res) => {
    try {
        console.log("Received fetch monsters request"); // log receipt of fetch monsters request

        const monstersResponse = await axios.post(url + '/find', { // make POST request to another endpoint /find with provided data
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
        if (monstersResponse && monstersResponse.data && monstersResponse.data.documents) {
            // Return the monsters directly as JSON
            res.json(monstersResponse.data.documents);
        } else { // If monster does not exist, return error message
            res.status(400).json({ error: "Monsters not found." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error processing the request." });
    }
});

// define a GET route at /getMonsterNames
router.get("/getMonsterNames", async (req, res) => {
    try {
        console.log("Received get monster names request"); // log receipt of get monster names request

        const monstersResponse = await axios.post(url + '/find', { 
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
        if (monstersResponse && monstersResponse.data && monstersResponse.data.documents) {
            // Extract names from each monster object
            const monsterNames = monstersResponse.data.documents.map(monster => monster.name);
            
            // Return the names directly as JSON
            res.json({ monsterNames });
        } else {
            // If monster does not exist, return error message
            res.status(400).json({ error: "Monsters not found." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error processing the request." });
    }
});

module.exports = router;
