import React from "react";
import './TodoCounter.css'

function TodoCounter({ total, completed }){
    let message = `You has completed ${completed} of ${total} TODOs`
    if (completed == total && total != 0) {
        message = 'Great! You completed all your To-Dos'
    }

    return (
        <h2 className="todo-counter">{message}</h2>
    )
}

export { TodoCounter };