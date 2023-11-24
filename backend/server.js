const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const PORT = 4000;
const users = require('./routes/users');
const notes = require('./routes/notes');
const races = require('./routes/races');
const classes = require('./routes/classes')
const backgrounds = require('./routes/backgrounds');
const spells = require('./routes/spells');
const items = require('./routes/items');
const feats = require('./routes/feats');
const monsters = require('./routes/monsters');
const cors = require('cors');

app.use(cors());

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
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

app.use("/action", users);
app.use("/action", notes);
app.use("/action", races);
app.use("/action", classes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});