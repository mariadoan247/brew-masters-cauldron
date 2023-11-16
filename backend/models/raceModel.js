const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RaceSchema = new Schema (
    {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Generated schema for Race",
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "size": {
                    "type": "string"
                },
                "speed": {
                    "type": "number"
                },
                "ability": {
                    "type": "string"
                },
                "spellAbility": {
                    "type": "string"
                },
                "proficiency": {
                    "type": "string"
                },
                "trait": {},
                "modifier": {
                    "type": "string"
                }
            },
            "required": [
                "name",
                "size",
                "speed",
                "ability",
                "spellAbility",
                "proficiency",
                "trait"
            ]
        }
    }
);