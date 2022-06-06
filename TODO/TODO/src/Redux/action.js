import { ADD_TODO } from "./actionTypes";

// ation creator

export const addTodo = payload => {
        return{
            type : ADD_TODO,
            payload
        };
}  ; 