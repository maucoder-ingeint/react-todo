import React from "react";
import "./todoSearch.css";

function TodoSearch({ searchValue, setValueSearch }) {
    const onChangeInput = (event) => {
        setValueSearch(event.target.value)
    }

    return [
        <input
            className="todo-search"
            placeholder="Onion"
            value={searchValue}
            onChange={onChangeInput}    
        /> 
    ]
}

export { TodoSearch };