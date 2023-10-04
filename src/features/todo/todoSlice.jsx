import { CreateSlice, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { todofa-stack-1x: [] };

const export todoSlice =createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo : (state, action )=>{
            const newTodo ={
                id:nanoid(),
                text:action.payload ,
            }
            state.todos.push(newTodo) ;
        },
        removeToto :(state, action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !==action.payload)
        }
    }
})

export const {addTodo , removeTomo} =todoSlice.actions ;
export default todoSlice.reducer ;