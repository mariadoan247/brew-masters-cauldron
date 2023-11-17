const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClassSchema = new Schema({
    name: {
        type: String, // ex. "Barbarian"
        required: true
    },
    hd: {
        type: Number, // ex. "12"
        required: true
    },
    proficiency: {
        type: String, // ex. "Strength, Constitution, Animal Handling, Athletics, Intimidation, Nature..."
        required: true
    },
    spellAbility: {
        type: String, // null if no magic, attribute if magic
        required: true
    },
    numSkills: {
        type: Number,
        required: true
    },
    autolevel: {
        type: [{
            level: Number,
            features: [
                {
                    optional: String, // optional flag
                    name: String,
                    text: [String] // array of text
                }
            ]
        }],
        required: true
    },
    armor: { // optional (absent in druid and wizard)
        type: String, // ex. "light armor, medium armor, shields"
        required: false
    },
    weapons: { // optional (absent in druid and wizard)
        type: String, // ex. "simple weapons, martial weapons"
        required: false
    },
    tools: { // optional (absent in druid and wizard)
        type: String, // ex. "none" or "thieves' tools"
        required: false
    },
    wealth: { // optional (absent in druid and wizard)
        type: String, // ex. "2d4x10"
        required: false
    },
});

module.exports = mongoose.model('Class', ClassSchema);

/*
LIST OF CLASSES:
0. Barbarian
1. Bard
2. Cleric
3. Druid
4. Fighter
5. Monk
6. Paladin
7. Ranger
8. Rogue
9. Sorcerer
10. Warlock
11. Wizard
*/