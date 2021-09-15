import React, { useState } from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";

const Todo = () => {
    const [todos, setTodos] = useState([]);

    const addItem = (value) => {
        if (value !== "") {
            setTodos((todos) => [...todos, value]);
        }
    };

    const deleteItem = (id) => {
        setTodos(todos.filter((todo, index) => id !== index));
    };

    return (
        <>
            <Header />
            <Form addItem={addItem} />
            <TodoList todos={todos} deleteItem={deleteItem} />
        </>
    );
};

export default Todo;
