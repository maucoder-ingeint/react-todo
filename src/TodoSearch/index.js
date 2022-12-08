import React from "react";
import { todoContext } from "../todoContext";
import "./todoSearch.css";

function TodoSearch() {
    const { searchValue, setValueSearch } = React.useContext(todoContext)

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
