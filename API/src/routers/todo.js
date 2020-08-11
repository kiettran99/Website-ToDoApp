const router = require('express').Router();
const ToDo = require('../models/todo');
const isEmptyObject = require('../utils/isEmptyObject');
//API route /todo

//Get all list: /todo
router.get('/todo', async (req, res) => {
    try {
        const todos = await ToDo.find();
        res.send(todos);
    }
    catch (e) {
        console.log(e);
    }
});

//Get a todo by Id
router.get('/todo/:id', async (req, res) => {
    try {
        const id = req.params.id;

        //No params id
        if (!id) {
            return res.status(422).send('Please provide a Id of Todo');
        }

        const todo = await ToDo.findById(id);

        if (todo) {
            return res.send(todo);
        }

        return res.status(404).send();
    }
    catch (e) {
        console.log(e);
    }
});

//Post - Create a Todo
router.post('/todo', async (req, res) => {
    try {
        const todo = new ToDo(req.body);
        await todo.save();
        res.status(200).send({ todo: 'todo added successfully' });
    }
    catch (e) {
        res.status(400).send('addding new todo failed');
        console.log(e);
    }
});

//Put - Edit a Todo by Id
router.put('/todo/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const todoUpdate = req.body;

        if (!id || isEmptyObject(todoUpdate)) {
            return res.status(400).send('Please provide Id and todo');
        }

        const todo = await ToDo.findById(id);

        if (todo) {
            todo.description = todoUpdate.desciption;
            todo.responsible = todoUpdate.responsible;
            todo.priority = todoUpdate.priority;
            todo.completed = todoUpdate.completed;

            await todo.save();

            return res.status(200).send(todo);
        }

        return res.status(404);
    }
    catch (e) {
        console.log(e);
    }
});

//Delete - Remove a todo with ID.
router.delete('/todo/:id', async (req, res) => {
    try {
        const todo = await ToDo.findByIdAndDelete(req.params.id);
        res.send(todo);
    }
    catch (e) {
        console.log(e);
    }
});

module.exports = router;