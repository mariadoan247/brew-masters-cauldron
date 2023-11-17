const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MonsterSchema = new Schema({
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Generated schema for Monsters",
  "type": "object",
  "properties": {
    "_id": {
      "type": "object",
      "properties": {
        "$oid": {
          "type": "string"
        }
      }
    },
    "compendium": {
      "type": "object",
      "properties": {
        "monster": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": { "type": "string" },
              "size": { "type": "string" },
              "type": { "type": "string" },
              "alignment": { "type": "string" },
              "ac": { "type": "string" },
              "hp": { "type": "string" },
              "speed": { "type": "string" },
              "str": { "type": "string" },
              "dex": { "type": "string" },
              "con": { "type": "string" },
              "int": { "type": "string" },
              "wis": { "type": "string" },
              "cha": { "type": "string" },
              "passive": { "type": "string" },
              "trait": {},
              "action": {},
              "spells": { "type": "string" },
              "slots": { "type": "string" },
              "environment": { "type": "string" },
              "legendary": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "name": { "type": "string" },
                    "text": {},
                    "attack": {}
                  },
                  "required": ["name"]
                }
              },
              "reaction": {
                "type": "object",
                "properties": {
                  "name": { "type": "string" },
                  "text": {},
                  "attack": { "type": "string" }
                }
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
              "passive",
              "trait",
              "action"
            ]
          }
        }
      }
    },
    "homebrew": {
      "type": "object",
      "properties": {
        "monster": {
          "type": "array",
          "items": {
            "$ref": "#/properties/compendium/properties/monster/items"
          }
        }
      }
    }
  },
  "required": ["_id", "compendium", "homebrew"]
});

module.exports = mongoose.model('Monster', MonsterSchema);
