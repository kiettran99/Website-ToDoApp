import React from 'react';
import { Link } from 'react-router-dom';

const TodoItem = (props) => {
    console.log()
    return (
        <tr>
            <td className={props.completed ? 'completed' : ''}>{props.description}</td>
            <td className={props.completed ? 'completed' : ''}>{props.responsible}</td>
            <td className={props.completed ? 'completed' : ''}>{props.priority}</td>
            <td>
                <Link to={"/edit/" + props._id}>Edit</Link>
            </td>
        </tr>
    );
}

export default TodoItem;