/*
Topic      : React useEffect Hook
Program    : Page Title Counter
Purpose    : Update the browser tab title whenever the counter changes.

Definition :
The useEffect Hook is used to perform side effects in a function component.
This project demonstrates:
1. useState
2. useEffect
3. Dependency Array
4. Browser Tab Title Update
5. Button Click
*/

import { useState, useEffect } from "react";

function PageTitleChanger() {

    // State for Counter
    const [count, setCount] = useState(0);

    // Update Browser Tab Title
    useEffect(() => {

        document.title = `Count: ${count}`;

    }, [count]);

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
                Page Title Counter
            </h2>

            <h1>
                {count}
            </h1>

            <button
                onClick={() => setCount(count + 1)}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >
                Increment
            </button>

        </div>

    );

}

export default PageTitleChanger;

/*

Expected Output

        Page Title Counter

              0

        [ Increment ]

----------------------------------

Click

Increment

↓

Counter

1

↓

Browser Tab

Count: 1

----------------------------------

Click Again

↓

Counter

2

↓

Browser Tab

Count: 2

----------------------------------

Click Again

↓

Counter

3

↓

Browser Tab

Count: 3

*/