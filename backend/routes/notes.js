const { getUserByEmail } = require("../validation/getUserByEmail");
const express = require("express");
const router = express.Router();
const keys = require("../config/keys");
const jwt = require("jsonwebtoken");

const axios = require("axios");

const apiKey = keys.apiKey;
const url = keys.url;

router.post("/createNewNote", async (req, res) => {
    try {
        console.log("Received new note request");

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

        // Create JWT Payload
        const payload = {
            notes: req.body.update.$set.notes
        };

        // Sign token
        jwt.sign(
            payload,
            keys.secretOrKey,
            {
                expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
                if (err) {
                    res.status(500).json({ error: "Error signing the token." });
                    return;
                }
                res.json({
                    success: true,
                    token: "Bearer " + token
                });
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error processing the request." });
    }
});


router.post("/updateNote", async (req, res) => {
    try {
        console.log("Received update note request");

        const updatedNote = new Note({
            details: req.body.document.details,
            dateEdited: req.body.document.dateEdited
        });

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

router.post("/deleteOne", async (req, res) => {
    try {
        console.log("Received delete note request");

        const response = await axios.post(url + '/deleteOne', {
            collection: req.body.collection,
            database: req.body.database,
            dataSource: req.body.dataSource,
            filter: {
                email: req.body.filter.email
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

        const payload = {
            notes: user.notes
        };

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error processing the request." });
    }
});

module.exports = router;