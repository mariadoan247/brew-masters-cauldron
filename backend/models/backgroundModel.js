const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BackgroundSchema = new Schema (
    {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Generated schema for Background",
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "proficiency": {
                    "type": "string"
                },
                "trait": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "string"
                            },
                            "text": {}
                        },
                        "required": [
                            "name",
                            "text"
                        ]
                    }
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
                "proficiency",
                "trait"
            ]
        }
    }
);
