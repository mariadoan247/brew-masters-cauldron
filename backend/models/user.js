const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    notes: [{
        details: {
            type: String,
            required: true
        },
        dateUpdated: {
            type: Date,
            default: Date.now
        }
    }] // In the future you can create a separate note schema which will be able to hold more notes
});

module.exports = mongoose.model('User', User);