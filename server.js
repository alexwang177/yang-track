const express = require('express');
const app = express();
const twitter = require('./routes/api/twitter');
var cors = require("cors");

app.use(cors());

// Use routes
app.use('/api/twitter', twitter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

