const { getUserByEmail } = require("../validation/getUserByEmail");
const express = require("express");
const router = express.Router();
const keys = require("../config/keys");

const axios = require("axios");

const apiKey = keys.apiKey;
const url = keys.url;

router.post("/updateNotes", async (req, res) => {
    try {
        console.log("Received update notes request");

        const response = await axios.post(url + '/updateOne', {
            collection: req.body.collection,
            database: req.body.database,
            dataSource: req.body.dataSource,
            filter: {
                email: req.body.filter.email,
            },
            update: {
                $set: {
                    notes: req.body.update.$set.notes
                }
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

router.post("/fetchUserNotes", async (req, res) => {
    try {
        console.log("Received fetch notes request");

        const user = await getUserByEmail(req.body.filter.email);

        // If the user exists
        if (user && user.document) {
            // Return the notes directly
            res.json({
                success: true,
                notes: user.document.notes
            });
        } else {
            res.status(400).json({ error: "User not found." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error processing the request." });
    }
});

module.exports = router;