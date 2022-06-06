import React, { useDeferredValue } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {v4 as uuid} from "uuid";
import {addTodo} from "../../Redux/action"
const TodoInput = () => {

    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () =>{
        const payload = {
            title,
            status : false,
            id : uuid()
        };
        const addTodoAction = addTodo(payload);
        dispatch(addTodoAction);
    };
    return(
        <div>
            <h3>Add Todo</h3>
            <input value={title} onChange={(e) =>setTitle(e.target.value)} placeholder="add something"></input>
            <button  onClick={handleAdd}>add</button>
        </div>
    )
}


export {TodoInput}