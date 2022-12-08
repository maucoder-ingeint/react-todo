import React from "react";
import { todoContext } from "../todoContext";

// Styles

import {} from "./todoForm.css"

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
        editTodo,
        formRequestValue,
        idValue
    } = React.useContext(todoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();

        console.log(formRequestValue)

        if (newTodoValue && formRequestValue === 'CREATE') {
            addTodo(newTodoValue);
        }
        else if (newTodoValue && formRequestValue === 'EDIT') {
            editTodo(idValue, newTodoValue);
        }
        setOpenModal(false);
    }

    return (
        <form className="todoForm" onSubmit={onSubmit}>
            <label className="todoLabel">Write a new To-Do</label>
            <textarea 
                className="todoInput"
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cut Onions for lunch."
            />
            <div className="todoForm-buttonContainer">
                <button
                    className="todoForm-button TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    className="todoForm-button TodoForm-button--add"
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
    )
}

export { TodoForm };