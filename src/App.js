import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

function App() {
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
        <div className="App">
            <Header />
            <Form addItem={addItem} />
            <TodoList todos={todos} deleteItem={deleteItem} />
        </div>
    );
}

export default App;
