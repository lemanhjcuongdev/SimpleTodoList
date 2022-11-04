import React from "react";
import { useRef, useContext } from "react";

import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos_context";

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const textValue = todoTextInputRef.current!.value;
    if (textValue.trim().length === 0) {
      return;
    }
    todoCtx.addTodo(textValue);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
