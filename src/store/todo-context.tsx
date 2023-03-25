import React, {useState} from 'react';
import TodoModel from "../models/TodoModel"


type todoTypeObj = {
    items : TodoModel[],
    addTodo : (text : string) => void,
    removeTodo : (id : string) => void,
}

export const TodosContext = React.createContext<todoTypeObj>({
    items : [],
    addTodo : () => {},
    removeTodo : (id : string) => {},
})

const TodoContextProvider: React.FC<{children : any}> = (props) =>
{

    const [todos, setTodos] = useState<TodoModel[]>([]);

    const addTodoHandler = (todoText: string) =>
    {
      const newTodo = new TodoModel(todoText)
  
      setTodos((prevTodos) => {
        return prevTodos.concat(newTodo);
      })
    }
  
    const removeTodoHandler = (todoId : string) =>
    {
      setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.id !== todoId)
      })
    }

    const contextValue: todoTypeObj = {
        items : todos,
        addTodo : addTodoHandler,
        removeTodo : removeTodoHandler,    
    }

    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
}

export default TodoContextProvider;