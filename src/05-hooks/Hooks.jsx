import React from "react";
import UseStateEx from "./UseStateHooks";

const HooksEx = () => {
    return (
        <div>
            <h1>Hooks in React</h1>
            <p>Lifecycle of component:</p>
            <img src="/05-hooks/component-lifecycle.png" alt="" srcset="" />
            <br />
            
            <h2>Types of Hooks:</h2>
            <UseStateEx/>
        </div>
    );
}

export default HooksEx;