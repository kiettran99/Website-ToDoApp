import axios from 'axios';

const getTodosList = async (url) => {
    try {
        const todosList = await axios.get(url);
        return todosList;
    }
    catch (e) {
        console.log(e);
    }
};

const postTodo = async (url, todo) => {
    try {
        const todoResult = await axios.post(url, todo);
        return todoResult;
    }
    catch (e) {
        console.log(e);
    }
};

const editTodo = async (url, todo) => {
    try {
        const todoResult = await axios.put(url, todo);
        return todoResult;
    }
    catch (e) {
        console.log(e);
    }
}

export { getTodosList,  postTodo, editTodo }