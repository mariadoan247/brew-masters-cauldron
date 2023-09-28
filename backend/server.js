const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4000;

let Todo = require('./todo.model');
const db = 'mongodb+srv://mariadoan247:0AMWE58AVDUN5F1R@brewmasters-cauldron.knpgadz.mongodb.net/?retryWrites=true&w=majority'

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(db, {  useNewUrlParser: true })
        .then(() => console.log("MongoDB successfully connected"))
        .catch(err => console.log(err));
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

todoRoutes.route('/:id').get(async function(req, res) {
    let id = req.params.id;
    try {
        const todo = await Todo.findById(id).exec();
        res.json({ success: true, message: 'Todo found successfully', todo: todo });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Error retrieving todo " + id, error: err.message });
    }
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

todoRoutes.route('/update/:id').post(async function(req, res) {
    let id = req.params.id;
    try {
        const todo = await Todo.findById(id).exec();
        todo.todo_description = req.body.todo_description;
        todo.todo_responsible = req.body.todo_responsible;
        todo.todo_priority = req.body.todo_priority;
        todo.todo_completed = req.body.todo_completed;
        res.json({ success: true, message: 'Todo updated successfully', todo: todo });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Error updating todo " + id, error: err.message });
    }
});

app.use('/cauldron', todoRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});