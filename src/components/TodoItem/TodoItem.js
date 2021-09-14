import React from "react";

const TodoItem = ({ todo, id, deleteItem }) => {
    const onClick = () => {
        deleteItem(id);
    };
    return (
        <div>
            {id + 1}, {todo}
            <button onClick={onClick}>삭제</button>
        </div>
    );
};

export default TodoItem;
