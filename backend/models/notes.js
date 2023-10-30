const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Note = new Schema({
    details: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Note', Note);