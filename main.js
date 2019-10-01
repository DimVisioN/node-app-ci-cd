'use strict';

const express = require('express');

const app = express();

// Respond to all requests that hit root ('/') with "Test"
app.get('/', (req, res) => {
    res.send('Test');
});

// Listen to port 3000 by default
app.listen(process.env.PORT || 3000);

module.exports = app;
