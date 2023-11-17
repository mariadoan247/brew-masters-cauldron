const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ItemSchema = new Schema({
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Generated schema for Items",
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
        "item": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": { "type": "string" },
              "type": { "type": "string" },
              "text": {
                "type": "array",
                "items": { "type": "string" }
              }
            },
            "required": ["name", "type", "text"]
          }
        }
      },
      "required": ["@version", "item"]
    },
    "homebrew": {
      "type": "object",
      "properties": {
        "item": { "$ref": "#/properties/compendium/properties/item" }
      },
      "required": ["item"]
    }
  },
  "required": ["_id", "compendium", "homebrew"]
})

module.exports = mongoose.model('Item', ItemSchema);
