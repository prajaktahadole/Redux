// const reducer = (state, action) =>{
//     switch(action.type){
//         case 'INCREMENT':
//             return {
//                 ...state,                       //after updating this state is overeturn
//                 count : state.count + 1
//             }               
//         case 'INCREMENT':
//              return {
//                     ...state,                                       
//                     count : state.count - 1
//             }
//         default :
//             return state
//     }
//     return state;
// }


// const initState = {count : 0};
// console.log(initState);                               // initial state

// let updatedState =reducer (initState,  {type:'INCREMENT'});
// console.log(updatedState);                            // updated state



class store {
    #reducer
    #state
    constructor(reducer, initState){
        /// private fields -> # this can valid/accesible only within the class
        this.#reducer = reducer;
        this.#state = initState;
        this.listeners = [];
    }
    getState(){
         return this.#state;        //to retrieve this information from class store we use getState
    }

    dispatch(action){
         // update state
         this.#state = this.#reducer(this.#state, action);
    }
}

