const mongoose = require('mongoose');

const toDoSchema = mongoose.Schema({
    description: String,
    responsible: String,
    priority: String,
    completed: Boolean
});

module.exports = mongoose.model('ToDo', toDoSchema);