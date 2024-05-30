import React, {useEffect, useState} from "react";

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setTime(time + 1), 1000);
        console.log("Adding set interval");
        return function() {
            clearInterval(timer);
            console.log("clear interval ");
        };
    }, [time]);

    return (
        <div>
            <h3>Timer:</h3>
            <p>Time count: {time}</p>
        </div>
    );
}

export default Timer;