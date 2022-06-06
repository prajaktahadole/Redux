
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

