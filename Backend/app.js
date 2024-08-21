const express = require('express');
const app = express();

// Middleware (e.g., bodyParser, CORS)
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Export the app module
module.exports = app;

