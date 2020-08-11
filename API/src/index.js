// Import module
const express = require('express');
const cors = require('cors');
require('./db/mongoose');
const todoRouter = require('./routers/todo');

const app = express();

// Middleware - app.use
app.use(express.json());
app.use(cors());
app.use(todoRouter);

// Change settings - app.set


//Create a listen port
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});