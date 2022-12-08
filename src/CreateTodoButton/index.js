import React from "react";
import "./createTodoButton.css"

function CreateTodoButton(props){
    const onClickButtom = () => {
        props.setOpenModal(!!props.openModal ? false: true);
    };

    return (
        <button 
            className="CreateTodoButton"
            onClick={onClickButtom}
        >
            +
        </button>
    )
}

export { CreateTodoButton };