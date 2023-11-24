const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RaceSchema = new Schema({
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Generated schema for Races",
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
        "race": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": { "type": "string" },
              "size": { "type": "string" },
              "speed": { "type": "string" },
              "ability": { "type": "string" },
              "spellAbility": { "type": "string" },
              "proficiency": { "type": "string" },
              "trait": {},
              "modifier": {
                "type": "object",
                "properties": {
                  "@category": { "type": "string" },
                  "#text": { "type": "string" }
                },
                "required": ["@category", "#text"]
              }
            },
            "required": ["name", "size", "speed", "trait"]
          }
        }
      },
      "required": ["@version", "race"]
    },
    "homebrew": {
      "type": "object",
      "properties": {
        "race": { "$ref": "#/properties/compendium/properties/race" }
      },
      "required": ["race"]
    }
  },
  "required": ["_id", "compendium", "homebrew"]
});

module.exports = mongoose.model('Race', RaceSchema);