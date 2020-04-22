const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require("body-parser");
    
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

// Express body parser
app.use(express.urlencoded({ extended: true }));

// EJS
app.set('view engine', 'ejs');

// Connect to MongoDB
/* Uncomment this code to make a connection to database
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true } )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
*/

// Routes
app.use('/', require('./routes/index.js'));
// Routes: app.use('/routeName', require('./routes/routeName.js'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
