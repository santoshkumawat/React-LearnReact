import React, { useState } from "react";

const UseStateEx = () => {
    const [count, setCount] = useState(0);

    function incrementCount(){
        setCount(count + 1);
    }

    const [name, setName] = useState(0);

    function myName(){
        setName("Santosh Kumawat");
    }

    return (
        <div>
            <h3>UseState Hooks:</h3>
            <p><strong>A state of component is a variable that holds some information thay may change over the lifetime of the component</strong></p>

            <p><strong>Whenever the <em>value</em> of the state changes, the <em>component re-renders</em> itself with <em>updated values.</em></strong></p>
            <br />

            <img src="/05-hooks/useStatehook.png" alt="" />
            <br />
            <br />

            <h3>Example 1:</h3>
            <p>Count is {count}</p>
            <button onClick={incrementCount}>Click Me</button>
            <br />
            <br />

            <h3>Example 2:</h3>
            <p>To know my name click below button.</p>
            {name === 0 ? "" : "My name is: " + name}
            <br />
            <br />
            <button onClick={myName}>Click me</button>
        </div>
    );
    
}

export default UseStateEx;