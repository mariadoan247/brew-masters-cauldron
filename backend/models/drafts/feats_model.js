const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FeatSchema = new Schema({
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Generated schema for Feats",
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
        "feat": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": { "type": "string" },
              "prerequisite": { "type": "string" },
              "text": {
                "type": "array",
                "items": { "type": "string" }
              },
              "modifier": {},
              "proficiency": { "type": "string" }
            },
            "required": ["name", "text", "modifier"]
          }
        }
      },
      "required": ["@version", "feat"]
    },
    "homebrew": {
      "type": "object",
      "properties": {
        "feat": { "$ref": "#/properties/compendium/properties/feat" }
      },
      "required": ["feat"]
    }
  },
  "required": ["_id", "compendium", "homebrew"]
});

module.exports = mongoose.model('Feat', FeatSchema);