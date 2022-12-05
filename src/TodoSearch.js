import React from "react";
import "./styles/todoSearch.css";

function TodoSearch() {
    const [searchValue, setValueSearch] = React.useState('');

    const onChangeInput = (event) => {
        console.log(event.target.value)
        setValueSearch(event.target.value)
    }

    return [
        <input
            className="todo-search"
            placeholder="Onion"
            value={searchValue}
            onChange={onChangeInput}    
        />,
        <p className="todo-search--p">{searchValue}</p>
    ]
}

export { TodoSearch };
