import React from "react";

const Button = (props) => {
    return (
        <button className="todo-button">{props.name}</button>
    );
}

export default Button;