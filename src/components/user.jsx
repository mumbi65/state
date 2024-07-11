import React, {useReducer} from "react";

const User = () => {
    const initialUserState = {
        name: 'Mumbi',
        age: 23,
        country: 'Kenya',
        course: "Software Developer",
        profession: 'Software Engineer'
    }
    
    const [state, dispatch] = useReducer(userReducer, initialUserState)

    const updateUser = () =>{
        dispatch({
            type: "update-user",
            payload: {
                name: 'Opisa',
                age: 22,
                country: 'South Africa',
                course: "Architecture",
                profession: 'Architect'
            }
        })
    }

    return(
        <>
        <h1>User</h1>
        <h2>Name: {state.name}</h2>
        <h2>Age: {state.age}</h2>
        <h2>Country: {state.country}</h2>
        <h2>Course: {state.course}</h2>
        <h2>Profession: {state.profession}</h2>

        <button onClick={updateUser}>Update User</button>
        <button onClick={() => dispatch({type: "update-name", payload: "Tiff"})}>Update Name</button>
        <button onClick={() => dispatch({type: "update-profession", payload: "Lawyer"})}>Update Profession</button>
        <button onClick={() => dispatch({type: "check-eligibility"})}>Check Eligibility</button>
        </>
    )
}

const userReducer = (state, action) =>{
    switch(action.type){
        case "update-user":
            return action.payload
        case "update-name":
            return {...state, name: action.payload}
        case "update-profession":
            return {...state, profession: action.payload}
        case "check-eligibility":
            if(state.age > 18){
                console.log("Allowed")
            }
            else{
                console.log("Not Allowed")
            }
            return state
        default:
            return state
    }
}

export default User