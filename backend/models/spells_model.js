const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SpellSchema = new Schema({
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Generated schema for Spells",
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
        "spell": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": { "type": "string" },
              "level": { "type": "string" },
              "school": { "type": "string" },
              "ritual": { "type": "string" },
              "time": { "type": "string" },
              "range": { "type": "string" },
              "components": { "type": "string" },
              "duration": { "type": "string" },
              "classes": { "type": "string" },
              "text": {
                "type": "array",
                "items": { "type": "string" }
              },
              "roll": { "type": "string" }
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
      },
      "required": ["@version", "spell"]
    },
    "homebrew": {
      "type": "object",
      "properties": {
        "spell": { "$ref": "#/properties/compendium/properties/spell" }
      },
      "required": ["spell"]
    }
  },
  "required": ["_id", "compendium", "homebrew"]
});

module.exports = mongoose.model('Spell', SpellSchema);