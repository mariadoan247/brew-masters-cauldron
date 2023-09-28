const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

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

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});