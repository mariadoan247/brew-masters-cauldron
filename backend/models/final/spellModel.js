const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let SpellSchema = new Schema (
    {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Generated schema for Spell",
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "level": {
                    "type": "number"
                },
                "school": {
                    "type": "string"
                },
                "ritual": {
                    "type": "string"
                },
                "time": {
                    "type": "string"
                },
                "range": {
                    "type": "string"
                },
                "components": {
                    "type": "string"
                },
                "duration": {
                    "type": "string"
                },
                "classes": {
                    "type": "string"
                },
                "text": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "roll": {},
                "isHomebrew": {
                    "type": "boolean"
                },
                "public": {
                    "type": "boolean"
                }
            },
            "required": [
                "name",
                "level",
                "ritual",
                "time",
                "range",
                "components",
                "duration",
                "classes",
                "text",
                "roll"
            ]
        }
    }
);