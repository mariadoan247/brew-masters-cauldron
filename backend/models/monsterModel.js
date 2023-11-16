const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MonsterSchema = new Schema (
    {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Generated schema for Monster",
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
                "type": {
                    "type": "string"
                },
                "alignment": {
                    "type": "string"
                },
                "ac": {},
                "hp": {},
                "speed": {
                    "type": "string"
                },
                "str": {
                    "type": "number"
                },
                "dex": {
                    "type": "number"
                },
                "con": {
                    "type": "number"
                },
                "int": {},
                "wis": {
                    "type": "number"
                },
                "cha": {},
                "save": {
                    "type": "string"
                },
                "skill": {
                    "type": "string"
                },
                "resist": {
                    "type": "string"
                },
                "vulnerable": {
                    "type": "string"
                },
                "immune": {
                    "type": "string"
                },
                "conditionImmune": {
                    "type": "string"
                },
                "senses": {
                    "type": "string"
                },
                "passive": {
                    "type": "number"
                },
                "languages": {
                    "type": "string"
                },
                "cr": {},
                "trait": {},
                "action": {},
                "spells": {
                    "type": "string"
                },
                "slots": {},
                "environment": {
                    "type": "string"
                },
                "legendary": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "string"
                            },
                            "text": {},
                            "attack": {}
                        },
                        "required": [
                            "name",
                            "text",
                            "attack"
                        ]
                    }
                },
                "reaction": {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string"
                        },
                        "text": {},
                        "attack": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "name",
                        "text"
                    ]
                }
            },
            "required": [
                "name",
                "size",
                "type",
                "alignment",
                "ac",
                "hp",
                "speed",
                "str",
                "dex",
                "con",
                "int",
                "wis",
                "cha",
                "save",
                "skill",
                "resist",
                "vulnerable",
                "immune",
                "conditionImmune",
                "senses",
                "passive",
                "languages",
                "cr",
                "trait",
                "action",
                "spells",
                "slots"
            ]
        }
    }
);