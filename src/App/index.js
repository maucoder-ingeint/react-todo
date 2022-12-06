// JS Packages
import React from "react";

// local files
import { AppUI } from "./AppUI"

// const defaultTodos = [
//   {text: 'Buy onion', completed: false},
//   {text: 'Cut onion', completed: false},
//   {text: 'Eat onion', completed: true}
// ];

function App() {
  let localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (localStorageTodos) {
    parsedTodos = JSON.parse(localStorageTodos);
  } else {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];  
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);

    setTodos(newTodos)
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setValueSearch] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  }
  else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    })
  }

  const completeTodo = (text, new_state) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    
    const newTodos = [...todos];
    newTodos[todoIndex].completed = new_state;

    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter(todo => todo.text !== text);
    
    saveTodos(newTodos);
  };

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setValueSearch={setValueSearch}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
  ;
}

export default App;
