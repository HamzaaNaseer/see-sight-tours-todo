import React, { createContext, useContext, useState } from "react";
import { data } from "./dummydata";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(data);
  const [modal, setModal] = useState(false); // this is used to render modal
  const [editTodo, setEditTodo] = useState({}); // this todo will be opened in the modal

  const deleteTodo = (idx) => {
    console.log("delete called");
    // assigning the list to temp variable
    const temp = [...todos];

    // removing the element using splice
    temp.splice(idx, 1);

    // updating the list
    setTodos(temp);

    //closing the modal
    setModal(false);
  };

  // this will change the status to completed or pending
  const changeStatus = (status, idx) => {
    setTodos(
      todos.map((item, index) => (index === idx ? { ...item, status } : item))
    );
    //closing the modal
    setModal(false);
  };

  //this function will receive an index and will update that index
  const updateTodo = (title, description, idx) => {
    setTodos(
      todos.map((item, index) =>
        index === idx ? { ...item, title, description } : item
      )
    );
    //closing the modal
    setModal(false);
  };

  //this function will add the todo
  const addTodo = (newTodo) => {
    setTodos((oldTodos) => [...oldTodos, newTodo]);
  };

  return (
    <StateContext.Provider
      value={{
        modal,
        setModal,
        editTodo,
        setEditTodo,
        todos,
        setTodos,
        deleteTodo,
        changeStatus,
        addTodo,
        updateTodo,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
