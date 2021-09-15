import React, { useState } from "react";

const TodoItem = ({ todo, id, deleteItem }) => {
    const [state, setState] = useState("완료");

    const onClick = () => {
        deleteItem(id);
    };

    const updateTodo = (e) => {
        state === "완료" ? setState("취소") : setState("완료");
    };

    return (
        <div>
            <span>{id + 1} </span>
            <span style={{ textDecoration: state === "완료" ? "none" : "line-through" }}>
                {todo}
            </span>
            <button data-testid="update-btn" onClick={updateTodo}>
                {state}
            </button>
            <button data-testid="delete-btn" onClick={onClick}>
                삭제
            </button>
        </div>
    );
};

export default TodoItem;
