// use Express to create a router, enabling the program to handle different routes separately
const express = require("express");
const router = express.Router();
const keys = require("../config/keys");

const axios = require("axios");

const apiKey = keys.apiKey;
const url = keys.url;

// define a POST route at /fetchBackgrounds
router.post("/fetchBackgrounds", async (req, res) => {
    try {
        console.log("Received fetch backgrounds request"); // log receipt of fetch backgrounds request

        const backgroundsResponse = await axios.post(url + '/find', { // make POST request to another endpoint /find with provided data
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
        if (backgroundsResponse && backgroundsResponse.data && backgroundsResponse.data.documents) {
            // Return the backgrounds directly as JSON
            res.json(backgroundsResponse.data.documents);
        } else { // If background does not exist, return error message
            res.status(400).json({ error: "Backgrounds not found." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error processing the request." });
    }
});

// define a GET route at /getBackgroundNames
router.get("/getBackgroundNames", async (req, res) => {
    try {
        console.log("Received get background names request"); // log receipt of get background names request

        const backgroundsResponse = await axios.post(url + '/find', { 
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
        if (backgroundsResponse && backgroundsResponse.data && backgroundsResponse.data.documents) {
            // Extract names from each background object
            const backgroundNames = backgroundsResponse.data.documents.map(background => background.name);
            
            // Return the names directly as JSON
            res.json({ backgroundNames });
        } else {
            // If background does not exist, return error message
            res.status(400).json({ error: "Backgrounds not found." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error processing the request." });
    }
});

module.exports = router;