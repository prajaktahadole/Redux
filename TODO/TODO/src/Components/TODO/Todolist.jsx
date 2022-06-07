import React from "react";

import axios from "axios";

const TodoList = (title) => {

    const config ={
        method : "post",
        data : {
           title
        },
        url : "http://localhost:3030/"
    };

    return axios(config);

}


export {TodoList}