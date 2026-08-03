/*
Topic      : React Forms (Controlled Component)
Program    : Feedback Form
Purpose    : Get feedback from the user and display the character count.

Definition :
A textarea is used to enter multiple lines of text.
A Controlled Component stores the textarea value in React state.
*/

import { useState } from "react";

function Textarea() {

    // State for Feedback
    const [feedback, setFeedback] = useState("");

    return (

        <div
            style={{
                textAlign: "center",
                marginTop: "40px"}} >

            <h2>Feedback Form</h2>

            <textarea
                rows="5"
                cols="30"
                placeholder="Enter Your Feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                style={{
                    padding: "8px"
                }}/>

            <h3>Characters : {feedback.length}</h3>

        </div>

    );

}

export default Textarea;

/*

Expected Output

Feedback Form

+--------------------------+
| Enter Your Feedback      |
|                          |
|                          |
+--------------------------+

Characters : 0

----------------------------------

User Types

React is easy

----------------------------------

Output

Characters : 13

----------------------------------

*/