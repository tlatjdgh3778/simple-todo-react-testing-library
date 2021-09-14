// 추가하는 곳 input, button
import React, { useState } from "react";

const Form = ({ addItem }) => {
    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onClick = () => {
        addItem(value);
        setValue("");
    };
    return (
        <div>
            <input type="text" onChange={onChange} value={value} placeholder="text here"></input>
            <button onClick={onClick}>추가하기</button>
        </div>
    );
};

export default Form;
