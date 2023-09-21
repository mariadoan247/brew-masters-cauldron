const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    todo_description: {
        type: String,
        required: true
    },
    todo_responsible: {
        type: String,
        required: true
    },
    todo_priority: {
        type: String,
        required: true
    },
    todo_completed: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Todo', Todo);