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
                "name": {
                    "type": "string"
                },
                "hd": {
                    "type": "number"
                },
                "proficiency": {
                    "type": "string"
                },
                "spellAbility": {
                    "type": "string"
                },
                "numSkills": {
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
                            "slots": {
                                "type": "string"
                            }
                        },
                        "required": []
                    }
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