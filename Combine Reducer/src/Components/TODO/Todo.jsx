import { useEffect } from "react";
import { useDispatch } from "react-redux";


function Todo (){
    const dispatch = useDispatch();
    useEffect(()=>{
        getTodos(dispatch);
    }, []);

    return(
        <div>
            <TodoInput/>
            <br></br>
            <TodoList/>
        </div>
    )
}
