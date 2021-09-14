import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, deleteItem }) => {
    return (
        <div>
            {todos.map((todo, index) => {
                return <TodoItem todo={todo} key={index} id={index} deleteItem={deleteItem} />;
            })}
        </div>
    );
};

export default TodoList;
