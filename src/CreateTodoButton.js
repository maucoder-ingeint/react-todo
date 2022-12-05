import React from "react";
import "./styles/createTodoButton.css"

function CreateTodoButton(){
    const onClickCreateToDo = (msg) => {
        alert(msg);
    };

    return (
        <button 
            className="CreateTodoButton"
            onClick={() => onClickCreateToDo("Hey! Don't press the button, It's not ready yet!")}
        >
            +
        </button>
    )
}

export { CreateTodoButton };