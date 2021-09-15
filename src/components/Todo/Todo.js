import React, { useState } from "react";
import Footer from "../Footer/Footer";
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
            <Header title="Simple Todo" />
            <Form addItem={addItem} />
            <TodoList todos={todos} deleteItem={deleteItem} />
            <Footer footer="todo" />
        </>
    );
};

export default Todo;
