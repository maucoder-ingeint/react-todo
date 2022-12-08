import React from 'react';
import {useLocalStorage} from './useLocalStorage'

const todoContext = React.createContext();

function TodoProvider(props) {
    const {
      item: todos,
      saveItem: saveTodos,
      loading,
      error
    } = useLocalStorage('TODOS_V1', []);
  
    const [searchValue, setValueSearch] = React.useState('');
    const [formRequestValue, setFormRequestValue] = React.useState(null);
    const [idValue, setidValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false)
  
    const completeTodos = todos.filter(todo => todo.completed === true).length;
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
      });
    }
  
    const addTodo = (text) => {
      const newTodos = [...todos];

      newTodos.push({
        completed: false,
        text: text,
      });
      saveTodos(newTodos);
    }

    const editTodo = (text, new_text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      
      const newTodos = [...todos];
      newTodos[todoIndex].text = new_text;
  
      saveTodos(newTodos);
    };

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
        <todoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completeTodos,
            searchValue,
            setValueSearch,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            editTodo,
            formRequestValue,
            setFormRequestValue,
            idValue,
            setidValue
        }}>
            {props.children}
        </todoContext.Provider>
    )
}

export { todoContext, TodoProvider };