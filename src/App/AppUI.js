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
import { TodoForm } from "../TodoForm";

// Loading Files
import { TodosError } from '../TodosError/index.js'
import { TodosLoading } from '../TodosLoading/index'
import { EmptyTodos } from '../EmptyTodos/index'

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    editTodo,
    formRequestValue,
    setFormRequestValue,
    setidValue
  } = React.useContext(todoContext);

  return (
      <React.Fragment>
        <main className="todoMain">
          <TodoCounter />
            
          <TodoSearch />
          <TodoList>
            { error && <TodosError/>}
            { loading && new Array(3).fill(1).map((a, i) =>
              <TodosLoading key={i}/>
            )}
            { (!loading && !searchedTodos.length) && <EmptyTodos />}

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
                onEdit={() => {
                  editTodo(todo.text)
                }}
                setOpenModal={setOpenModal}
                formRequestValue={formRequestValue}
                setFormRequestValue={setFormRequestValue}
                setidValue={setidValue}
                />
            ))}
          </TodoList>
          
          {!!openModal && (
            <Modal>
              <TodoForm
                
              />
            </Modal>
          )}

          <CreateTodoButton
            setFormRequestValue={setFormRequestValue}
            setOpenModal={setOpenModal}
            formRequestValue={formRequestValue}
            openModal={openModal}
          />
        </main>
      </React.Fragment>
  );
}

export { AppUI };