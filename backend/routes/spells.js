// use Express to create a router, enabling the program to handle different routes separately
const express = require("express");
const router = express.Router();
const keys = require("../config/keys");

const axios = require("axios");

const apiKey = keys.apiKey;
const url = keys.url;

// define a POST route at /fetchSpells
router.post("/fetchSpells", async (req, res) => {
    try {
        console.log("Received fetch spells request"); // log receipt of fetch spells request

        const spellsResponse = await axios.post(url + '/find', { // make POST request to another endpoint /find with provided data
            collection: req.body.collection,
            database: req.body.database,
            dataSource: req.body.dataSource
        }, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey
            }
        });

        // If the spell exists
        if (spellsResponse && spellsResponse.data && spellsResponse.data.documents) {
            // Return the spells directly as JSON
            res.json(spellsResponse.data.documents);
        } else { // If spell does not exist, return error message
            res.status(400).json({ error: "Spells not found." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error processing the request." });
    }
});

// define a GET route at /getSpellNames
router.get("/getSpellNames", async (req, res) => {
    try {
        console.log("Received get spell names request"); // log receipt of spell names request

        const spellsResponse = await axios.post(url + '/find', { 
            collection: req.body.collection,
            database: req.body.database,
            dataSource: req.body.dataSource
        }, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey
            }
        });

        // If the spell exists
        if (spellsResponse && spellsResponse.data && spellsResponse.data.documents) {
            // Extract names from each spell object
            const spellNames = spellsResponse.data.documents.map(spell => spell.name);
            
            // Return the names directly as JSON
            res.json({ spellNames });
        } else {
            // If spell does not exist, return error message
            res.status(400).json({ error: "Spells not found." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error processing the request." });
    }
});

module.exports = router;
