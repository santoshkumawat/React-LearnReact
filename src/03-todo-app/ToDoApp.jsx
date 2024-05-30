import React from "react";
import "../00-stylesheet/03-todo-app.css";
import Header from "./Header";
import TodoItem from "./TodoItem";
import Button from "./Button";

const ToDoApp = () => {
    return (
        <div>
            <h3>Todo App:</h3>

            <div className="todo-container">
                <Header title="Todo App"/>
                <TodoItem text="Code"/>
                <TodoItem text="Eat"/>
                <TodoItem text="Coffee"/>
                <TodoItem text="Sleep"/>
                <TodoItem text="Repeat"/>
                <Button name="Add Todo"/>
            </div>
        </div>
    );
}


export default ToDoApp;