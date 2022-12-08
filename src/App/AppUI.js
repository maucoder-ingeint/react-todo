import React from "react";

// Styles
import './App.css';

// Local
import { todoContext } from "../todoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem/index";
import { Modal } from '../modal/index'

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(todoContext);

  return (
      <React.Fragment>
        <TodoCounter />
          
        <TodoSearch />
        <TodoList>
          { error && <p>Have Dispair, there is an error!!!</p>}
          { loading && <p>We're charging Your changes, please Don't worry...</p>}
          { (!loading && !searchedTodos.length) && <p>Create your first ToDo</p> }

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
        
        {!!openModal && (
          <Modal>
            <p>{searchedTodos.length > 0 && searchedTodos[0].text}</p>
          </Modal>
        )}

        <CreateTodoButton
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
  
      </React.Fragment>
  );
}

export { AppUI };