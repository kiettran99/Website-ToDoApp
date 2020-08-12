import React from 'react';
import { getTodosList } from '../services/todo-service';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
    state = {
        todos: []
    };

    urlAPI = "https://MERN-ToDoApp.radiun42.repl.co/todo/";

    constructor(props) {
        super(props);
    }

    componentDidMount = async () => {
        try {
            const todosList = await getTodosList(this.urlAPI);
            this.setState(() => ({ todos: todosList.data }));
            console.log(todosList);
        }
        catch (e) {
            // No Network -> navigation to /SomethingWrong route.
            console.log(e);
        }
    }

    todoList() {
        return this.state.todos.map((todo, index) => {
            return <TodoItem {...todo} key={index} />
        });
    }

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodosList;
