// use Express to create a router, enabling the program to handle different routes separately
const express = require("express");
const router = express.Router();
const keys = require("../config/keys");

const axios = require("axios");

const apiKey = keys.apiKey;
const url = keys.url;

// define a POST route at /fetchClasses
router.post("/fetchClasses", async (req, res) => {
    try {
        console.log("Received fetch classes request"); // log receipt of fetch classes request

        const classesResponse = await axios.post(url + '/find', { // make POST request to another endpoint /find with provided data
            collection: req.body.collection,
            database: req.body.database,
            dataSource: req.body.dataSource
        }, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey
            }
        });

        // If the class exists
        if (classesResponse && classesResponse.data && classesResponse.data.documents) {
            // Return the classes directly as JSON
            res.json(classesResponse.data.documents);
        } else { // If class does not exist, return error message
            res.status(400).json({ error: "Classes not found." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error processing the request." });
    }
});

module.exports = router;