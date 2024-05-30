import React from "react";

const TodoItem = (props) => {
    return (
        <li className="todo-item">
            <span className="">
                <input type="checkbox" />
                <span className="todo-text">{props.text}</span>
            </span>
            <p>...</p>
        </li>
    );
}

export default TodoItem;