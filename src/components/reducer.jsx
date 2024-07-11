import React, {useReducer, useState} from "react";

const Reducer = () => {
    const initialState = {count: 0}
    const [state, dispatch] = useReducer(reducer, initialState)


    return(
        <>
        <h1>Reducer</h1>
        <h2>{state.count}</h2>
        <button onClick={() => dispatch({type: "increment"})}>Increase</button>
        <button onClick={() => dispatch({type: "decrement"})}>Decrease</button>
        <button onClick={() => dispatch({type: "reset"})}>Reset</button>
        </>
    )
}

function reducer(state, action){
    switch (action.type) {
        case "increment":
            return{...state, count: state.count + 1}
        case "decrement":
            return{...state, count: state.count - 1}
        case "reset":
            return{...state, count: 0}
        default:
            return "Wrong Action"
    }
}

export default Reducer