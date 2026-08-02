/*
Topic      : React Event Handling
Program    : Character Counter
Purpose    : Count the number of characters entered by the user in real time.

Definition :
React Event Handling is used to respond to user actions such as button clicks, typing, and form submission.

This project demonstrates:
1. useState
2. onChange Event
3. Controlled Component
4. Live Character Counting
5. Real-time UI Update
*/

import { useState } from "react";

function CharacterCounter() {

    // State for Text
    const [text, setText] = useState("");

    return (

        <div
            style={{
                width: "400px",
                margin: "40px auto",
                padding: "25px",
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px gray",
                fontFamily: "Arial"
            }}
        >

            <h2 style={{ textAlign: "center" }}>
                Character Counter
            </h2>

            <label>
                <strong>Enter Text</strong>
            </label>

            <textarea
                rows="5"
                placeholder="Type Something..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "5px",
                    marginBottom: "20px",
                    borderRadius: "5px",
                    border: "1px solid gray",
                    boxSizing: "border-box"
                }}
            />

            <h3>
                Characters : {text.length}
            </h3>

        </div>

    );

}

export default CharacterCounter;

/*

Expected Output

        Character Counter

Enter Text

+--------------------------------+
| Type Something...              |
|                                |
|                                |
+--------------------------------+

Characters : 0

----------------------------------

*/