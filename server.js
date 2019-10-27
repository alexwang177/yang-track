const express = require('express');
const app = express();
const twitter = require('./routes/api/twitter');
var cors = require("cors");

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

// Use routes
app.use('/api/twitter', twitter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

