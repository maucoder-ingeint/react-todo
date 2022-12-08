import React from "react";
import { todoContext } from "../todoContext";
import './TodoCounter.css'

function TodoCounter(){
    const { totalTodos, completeTodos } = React.useContext(todoContext);

    let message = `You has ${completeTodos} of ${totalTodos} TODOs`
    if (completeTodos === totalTodos && totalTodos !== 0) {
        message = 'Great! You completed all your To-Do'
    }

    return (
        <h2 className="todo-counter">{message}</h2>
    )
}

export { TodoCounter };