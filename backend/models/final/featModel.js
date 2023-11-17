const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FeatSchema = new Schema (
    {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Generated schema for Feat",
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "prerequisite": {
                    "type": "string"
                },
                "text": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "modifier": {},
                "proficiency": {
                    "type": "string"
                },
                "isHomebrew": {
                    "type": "boolean"
                },
                "public": {
                    "type": "boolean"
                }
            },
            "required": [
                "name",
                "prerequisite",
                "text",
                "modifier"
            ]
        }
    }
);