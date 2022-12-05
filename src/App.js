// JS Packages
import React from "react";
// Styles
// import './App.css';
// Local
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";

const todos = [
  {text: 'Buy onion', completed: true},
  {text: 'Cut onion', completed: false},
  {text: 'Eat onion', completed: false}
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
        
      <TodoSearch/>
      
      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            />
        ))}
      </TodoList>

      <CreateTodoButton/>

    </React.Fragment>
  );
}

export default App;
