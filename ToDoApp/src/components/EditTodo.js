import React from 'react';
import { getTodosList, editTodo } from '../services/todo-service';
import TodoForm from './TodoForm';

const urlAPI = 'https://MERN-ToDoApp.radiun42.repl.co'

const EditTodo = (props) => {

    console.log(props);

    return (
        <div>
            <TodoForm
                id={props.match.params.id}
    
                getTodos={async (id) => {
                    const todo = await getTodosList(`${urlAPI}/todo/${id}`);
                    return todo || undefined;
                }}
                onSubmit={async (todo) => {
                    const result = await editTodo(`${urlAPI}/todo/${todo._id}`, todo);
                    console.log(result + 'success');
                    props.history.push('/');
                }} />
        </div>
    );
}

export default EditTodo;