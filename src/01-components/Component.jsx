import React from "react"
import HelloWorld from "./HelloWorld";
import Rule from "./Rule";

const Component = () => { 
    return (
    <div className='react-components'>
        <h1>Componets</h1>
        <HelloWorld/>
        <p>This Hello World rendered from HelloWorld Components.</p>
        <Rule/>
    </div>);
}

export default Component;