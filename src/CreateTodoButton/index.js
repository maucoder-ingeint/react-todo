import React from "react";
import "./createTodoButton.css"

function CreateTodoButton(props){
    const onClickButtom = () => {
        // setState native function to optimizate code
        props.setFormRequestValue((prevState) => {
            if (prevState !== 'CREATE') {
                return "CREATE"
            }
            return prevState
        });
        props.setOpenModal(prevState => !prevState);
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