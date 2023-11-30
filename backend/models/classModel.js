const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClassSchema = new Schema (
    {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Generated schema for Class",
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "name": { //done (twice)
                    "type": "string"
                },
                "hd": { //done
                    "type": "number"
                },
                "proficiency": { //done
                    "type": "string"
                },
                "spellAbility": { //done
                    "type": "string"
                },
                "numSkills": { //done
                    "type": "number"
                },
                "autolevel": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "feature": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string"
                                    },
                                    "text": {
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    "proficiency": {
                                        "type": "string"
                                    },
                                    "armor": {
                                        "type": "string"
                                    },
                                    "weapons": {
                                        "type": "string"
                                    },
                                    "tools": {
                                        "type": "string"
                                    },
                                    "wealth": {
                                        "type": "string"
                                    },
                                    "modifier": {},
                                    "special": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "name",
                                    "text",
                                    "modifier"
                                ]
                            },
                            "slots": { //done
                                "type": "string"
                            }
                        },
                        "required": []
                    }
                },
                "armor": { //done
                    "type": "string"
                },
                "weapons": { //done
                    "type": "string"
                },
                "tools": { //done
                    "type": "string"
                },
                "wealth": { //done
                    "type": "string"
                },
                "isHomebrew": {
                    "type": "boolean"
                },
                "public": { //shouldn't be publicly displayed
                    "type": "boolean"
                }
            },
            "required": [
                "name",
                "hd",
                "proficiency",
                "spellAbility",
                "numSkills",
                "autolevel"
            ]
        }
    }
);