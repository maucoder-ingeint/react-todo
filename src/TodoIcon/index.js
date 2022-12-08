import React from "react";
import './TodoIcon.css';

function TodoIcon({ type, color, onClick }) {
    return (
        <span
        className={`icon-container Icon-container--${type}`}
        onClick={onClick}
        >
            {/* {Here goes the commit} */}
        </span>
    )
}

export { TodoIcon };
