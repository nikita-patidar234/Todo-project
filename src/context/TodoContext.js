import { createContext,useContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            Content:"todo msg",
            Completed:false,
        },
    ],
    addTodo:(Content)=>{},
    removeTodo:(id)=>{},
    updateTodo:(id,Content)=>{},
    toggleComplete:(id)=>{}
})

export const TodoProvider=TodoContext.Provider

export  const useTodo=()=>{
    return useContext(TodoContext)
}
export default useTodo