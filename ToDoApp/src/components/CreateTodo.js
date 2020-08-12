import React from 'react';
import TodoForm from './TodoForm';
import { postTodo } from '../services/todo-service';

const urlAPI = 'https://MERN-ToDoApp.radiun42.repl.co'

const CreateTodo = () => (
    <div>
        <TodoForm onSubmit={async (todo) => {
            const result = await postTodo(`${urlAPI}/todo`, todo);
            console.log(result + 'success');
        }} />
    </div>
);

export default CreateTodo;