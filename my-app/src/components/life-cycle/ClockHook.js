import React, { useEffect, useState } from "react";

function ClockClass() {
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    };

    useEffect(() => {
        console.log("componentDidMount");
        const timerID = setInterval(() => tick(), 1000);

        return () => {
            console.log("componentWillUnmount");
            clearInterval(timerID);
        };
    }, []);

    useEffect(() => {
        console.log("componentDidUpdate");
        console.log(date);
    }, [date]);

    return (
        <div>
            <h1>Hello, wolrd!</h1>
            <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    );
}

export default ClockClass;
