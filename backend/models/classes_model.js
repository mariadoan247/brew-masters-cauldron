const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClassSchema = new Schema({
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Generated schema for Classes",
  "type": "object",
  "properties": {
    "_id": {
      "type": "object",
      "properties": {
        "$oid": {
          "type": "string"
        }
      },
      "required": ["$oid"]
    },
    "compendium": {
      "type": "object",
      "properties": {
        "@version": { "type": "string" },
        "class": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": { "type": "string" },
              "hitDie": { "type": "string" },
              "proficiency": { "type": "string" },
              "savingThrow": {
                "type": "array",
                "items": { "type": "string" }
              },
              "classTable": { "type": "string" },
              "spellcastingAbility": { "type": "string" },
              "subclass": { "type": "string" },
              "feature": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "name": { "type": "string" },
                    "level": { "type": "string" },
                    "text": {
                      "type": "array",
                      "items": { "type": "string" }
                    }
                  },
                  "required": ["name", "level", "text"]
                }
              }
            },
            "required": [
              "name",
              "hitDie",
              "proficiency",
              "savingThrow",
              "classTable",
              "spellcastingAbility",
              "feature"
            ]
          }
        }
      },
      "required": ["@version", "class"]
    },
    "homebrew": {
      "type": "object",
      "properties": {
        "class": { "$ref": "#/properties/compendium/properties/class" }
      },
      "required": ["class"]
    }
  },
  "required": ["_id", "compendium", "homebrew"]
});

module.exports = mongoose.model('Class', ClassSchema);
