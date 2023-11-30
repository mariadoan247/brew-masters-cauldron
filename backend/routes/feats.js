// use Express to create a router, enabling the program to handle different routes separately
const express = require("express");
const router = express.Router();
const keys = require("../config/keys");

const axios = require("axios");

const apiKey = keys.apiKey;
const url = keys.url;

// define a POST route at /fetchFeats
router.post("/fetchFeats", async (req, res) => {
    try {
        console.log("Received fetch feats request"); // log receipt of fetch feats request

        const featsResponse = await axios.post(url + '/find', { // make POST request to another endpoint /find with provided data
            collection: req.body.collection,
            database: req.body.database,
            dataSource: req.body.dataSource
        }, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey
            }
        });

        // If the feat exists
        if (featsResponse && featsResponse.data && featsResponse.data.documents) {
            // Return the feats directly as JSON
            res.json(featsResponse.data.documents);
        } else { // If feat does not exist, return error message
            res.status(400).json({ error: "Feats not found." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error processing the request." });
    }
});

// define a GET route at /getFeatNames
router.get("/getFeatNames", async (req, res) => {
    try {
        console.log("Received get feat names request"); // log receipt of get feat names request

        const featsResponse = await axios.post(url + '/find', { 
            collection: req.body.collection,
            database: req.body.database,
            dataSource: req.body.dataSource
        }, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey
            }
        });

        // If the feat exists
        if (featsResponse && featsResponse.data && featsResponse.data.documents) {
            // Extract names from each feat object
            const featNames = featsResponse.data.documents.map(feat => feat.name);
            
            // Return the names directly as JSON
            res.json({ featNames });
        } else {
            // If feat does not exist, return error message
            res.status(400).json({ error: "Feats not found." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error processing the request." });
    }
});

module.exports = router;