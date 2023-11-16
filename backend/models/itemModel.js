const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ItemSchema = new Schema (
    {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Generated schema for Item",
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "type": {
                    "type": "string"
                },
                "weight": {},
                "text": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "magic": {
                    "type": "number"
                },
                "detail": {
                    "type": "string"
                },
                "roll": {},
                "value": {
                    "type": "number"
                },
                "modifier": {},
                "ac": {
                    "type": "number"
                },
                "strength": {},
                "stealth": {},
                "dmg1": {},
                "dmg2": {
                    "type": "string"
                },
                "dmgType": {
                    "type": "string"
                },
                "property": {
                    "type": "string"
                },
                "range": {
                    "type": "string"
                }
            },
            "required": [
                "name",
                "type",
                "weight",
                "text",
                "roll",
                "modifier",
                "strength",
                "stealth",
                "dmg1"
            ]
        }
    }
);