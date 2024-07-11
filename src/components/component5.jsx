import React from "react";
import { useContext } from "react";
import { NameContext } from "../App";
import { useState } from "react";

const Component5 = () => {

    const [name, setname] = useContext(NameContext)

    return(
        <>
        <h5>Hello {name}</h5>
        <button onClick={() => setname('Opisa')}>Change Name</button>
        </>
    )
}

export default Component5