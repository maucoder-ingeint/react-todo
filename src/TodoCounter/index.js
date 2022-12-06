import React from "react";
import './TodoCounter.css'

function TodoCounter({ total, completed }){
    return (
        <h2 className="todo-counter">You has completed {completed} of {total} TODOs</h2>
    )
}

export { TodoCounter };