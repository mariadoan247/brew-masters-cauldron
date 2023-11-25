// use Express to create a router, enabling the program to handle different routes separately
const express = require("express");
const router = express.Router();
const keys = require("../config/keys");

const axios = require("axios");

const apiKey = keys.apiKey;
const url = keys.url;

// define a POST route at /fetchItems
router.post("/fetchItems", async (req, res) => {
    try {
        console.log("Received fetch items request"); // log receipt of fetch items request

        const itemsResponse = await axios.post(url + '/find', { // make POST request to another endpoint /find with provided data
            collection: req.body.collection,
            database: req.body.database,
            dataSource: req.body.dataSource
        }, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey
            }
        });

        // If the item exists
        if (itemsResponse && itemsResponse.data && itemsResponse.data.documents) {
            // Return the items directly as JSON
            res.json(itemsResponse.data.documents);
        } else { // If item does not exist, return error message
            res.status(400).json({ error: "Items not found." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error processing the request." });
    }
});

module.exports = router;