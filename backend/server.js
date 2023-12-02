const express = require('express');
const app = express(); // initialize Express instance
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); // parses incoming request bodies in a middleware before handlers, parses JSON and url-encoded data
const passport = require("passport"); // handles user authentication strategies
const PORT = 4000;
const users = require('./routes/users');
const notes = require('./routes/notes');
const characters = require('./routes/characters');
const races = require('./routes/races');
const classes = require('./routes/classes')
const backgrounds = require('./routes/backgrounds');
const spells = require('./routes/spells');
const items = require('./routes/items');
const feats = require('./routes/feats');
const monsters = require('./routes/monsters');
const cors = require('cors');

app.use(cors()); // enables Cross-Origin Resource Sharing (CORS), allowing or restricting requested resources on web server depending on where HTTP request was initiated

app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db, // contains configuration from config/keys.js
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected")) // success: connection is established
  .catch(err => console.log(err)); // failure: connection couldn't be established

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Route config, routes are handled by corresponding imported route handlers
app.use("/action", users);
app.use("/action", notes);
app.use("/action", characters);
app.use("/action", races);
app.use("/action", classes);
app.use("/action", backgrounds);
app.use("/action", spells);
app.use("/action", items);
app.use("/action", feats);
app.use("/action", monsters);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});