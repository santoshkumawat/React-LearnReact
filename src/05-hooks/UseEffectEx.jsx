import React, {useEffect, useState} from "react";
import Timer from "./Timer";

const UseEffectEx = () => {
    const [count, setCount] = useState(0);
    useEffect (() => {
        console.log("Intial Use Effect....")
    }, []);

    useEffect (() => {
        console.log("Count is", count);
    }, [count]);


    const [visible, setVisible] = useState(true);
    useEffect(() => {
        console.log("component is unmount....");
    }, [visible]);


    return ( 
        <div>
            <h3>2. Use Effect Hooks:</h3>
            
            <h3>Example 1:</h3>
            <p>Count is: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <br /><br />

            <h3>Example 2:</h3>
            {visible ? <Timer/> : <></>}

            <h3>Example 3: Hide/Show Timer</h3>
            <button onClick={() => setVisible(!visible)}>Toggle</button>
        </div>
    );
}

export default UseEffectEx;