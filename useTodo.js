import { useEffect, useReducer } from "react";
import { TodoReducer } from "../08-useReducer";

const initialState = [
    // {
    //   id: new Date().getTime(),
    //   description: "recolectar la piedra del alma",
    //   done: false,
    //   fechaI: Date.now(),
    //   fechaf: null,
    // },
    // {
    //   id: new Date().getTime() * 3,
    //   description: "recolectar la piedra del poder",
    //   done: false,
    //   fechaI: Date.now(),
    //   fechaf: null,
    // },
  ];
  
  const init = () =>{
      return JSON.parse(localStorage.getItem('todos') ) || [];
  }


export const useTodo = () => {
  
  
    const [todos, dispatchTodo] = useReducer( TodoReducer, initialState,init);

    useEffect(() => {
      
      localStorage.setItem('todos',JSON.stringify(todos) || [])
      
    }, [todos])
    
  
    const onNewTodo = (todo) =>{
         const action ={
          type: 'Add todo',
          payload: todo
         };
  
         dispatchTodo(action)
    }
    const handleDelecteTodo = (id)=>{
          const action ={
            type: 'remove todo',
            payload: id
          };
  
          dispatchTodo(action);
    }
    const handleToggleTodo =(id) =>{
        dispatchTodo({
          type : 'complet todo',
          payload: id
        })
    }
  
    
  
    return {
            todos,
            handleDelecteTodo,
            handleDelecteTodo,
            handleToggleTodo,
            onNewTodo,
            allTodos : todos.length,
            pendientes : todos.filter( todo => !todo.done).length;

  }
}
