import React from "react";
import "./styles/todoItem.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function TodoItem(props) {
    const onCompleteItem = () => {
        alert("You completed the task " + props.text)
    }
    const onDeleteItem = () => {
        alert("You erased the task " + props.text)
    }

    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onCompleteItem}
            >
                <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span
                className="Icon Icon-delete"
                onClick={onDeleteItem}
            >
                <FontAwesomeIcon icon={faTrash} />
            </span>
        </li>
    )
}

export {TodoItem}