/*
Topic      : React useEffect Hook
Program    : Digital Clock
Purpose    : Display the current time and update it every second.

Definition :
The useEffect Hook is used to perform side effects in a function component.
This project demonstrates:
1. useState
2. useEffect
3. Empty Dependency Array
4. setInterval()
5. Cleanup Function
*/

import { useState, useEffect } from "react";

function DigitalClock() {

    // State for Current Time
    const [time, setTime] = useState(new Date());

    // Start Timer
    useEffect(() => {

        const timer = setInterval(() => {

            setTime(new Date());

        }, 1000);

        // Cleanup Function
        return () => {

            clearInterval(timer);

        };

    }, []);

    return (

        <div
            style={{
                width: "350px",
                margin: "40px auto",
                padding: "25px",
                textAlign: "center",
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px gray",
                fontFamily: "Arial"
            }}
        >

            <h2>
                Digital Clock
            </h2>

            <h1>
                {time.toLocaleTimeString()}
            </h1>

        </div>

    );

}

export default DigitalClock;

/*

Expected Output

        Digital Clock

        08:45:10 PM

↓

After 1 Second

        08:45:11 PM

↓

After 1 Second

        08:45:12 PM

↓

Time updates automatically every second.

--------------------------------------


*/