const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4000;

let Todo = require('./todo.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/cauldron', {  useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

todoRoutes.route('/').get(async function(req, res) {
    try {
        const todos = await Todo.find().exec();
        res.json(todos);
    } catch (err) {
        console.log(err);
        res.status(500).json('Error retrieving todos');
    }
});

todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});

todoRoutes.route('/add').post(async function(req, res) {
    try {
        let todo = new Todo(req.body);
        await todo.save();
        res.status(200).json({ success: true, message: 'Todo added successfully', todo: todo });
    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, message: 'Failed to add new todo', error: err.message });
    }
});

todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send('data is not found');
        else   
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;

            todo.save().then(todo => {
                res.json('Todo updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/cauldron', todoRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});