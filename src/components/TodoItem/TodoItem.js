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
            <span style={{ textDecoration: state === "완료" ? "none" : "line-through" }}>
                {id + 1} {todo}
            </span>
            <button onClick={updateTodo}>{state}</button>
            <button onClick={onClick}>삭제</button>
        </div>
    );
};

export default TodoItem;
