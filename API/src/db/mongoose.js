const mongoose = require('mongoose');

//connect to mongodb atlas.
mongoose.connect("mongodb+srv://admin:admin@cluster0-44xwj.mongodb.net/ToDoAppMern?retryWrites=true&w=majority",
 { useNewUrlParser: true, useUnifiedTopology: true })
