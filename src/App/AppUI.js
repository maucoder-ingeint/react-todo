import React from "react";

// Styles
import './App.css';

// Local
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem/index";

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    setValueSearch,
    completeTodo,
    deleteTodo
}) {
    return (
        <React.Fragment>
          <TodoCounter
            total={totalTodos}
            completed={completedTodos}
          />
            
          <TodoSearch
            searchValue={
                searchValue
            }
            setValueSearch={
                setValueSearch
            }
          />
          
          <TodoList>
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => {
                  completeTodo(todo.text, todo.completed ? false: true)
                }}
                onDelete={() => {
                  deleteTodo(todo.text)
                }}
                />
            ))}
          </TodoList>
    
          <CreateTodoButton/>
    
        </React.Fragment>
    );
}

export { AppUI };