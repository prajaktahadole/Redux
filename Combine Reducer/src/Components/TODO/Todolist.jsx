import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {

    //const state = useSelector((state) =>state.todos)  write in this manner
    const todos = useSelector((state ) =>state.todos)


        console.log(todos);
       
    return(
        <div>
            <h3>Add List</h3>
            <div>{todos.map(item =>
            <div key={item.id}>{item.title}</div>)}
            </div>
        </div>
    )
}


export {TodoList}