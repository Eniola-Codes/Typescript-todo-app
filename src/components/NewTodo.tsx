import React, {useRef, useContext} from 'react';
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todo-context';


const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodosContext)
  const todoInputRef = useRef<HTMLInputElement>(null);

 const submitHandler = (event: React.FormEvent) =>
 {
  event.preventDefault();

    const enteredTodo = todoInputRef.current!.value;


    if(enteredTodo.trim().length === 0)
    {
      return;
    }

    todoCtx.addTodo(enteredTodo)
    
 }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label>Enter Todo</label>
    <input type='text' ref={todoInputRef}></input>
    <button type='submit'>Submit</button>
    </form>
  )
}

export default NewTodo