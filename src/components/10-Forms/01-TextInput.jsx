/*
Topic      : React Forms (Controlled Component)
Program    : Text Input
Purpose    : Get the user's name and display it on the screen.

Definition :
A Controlled Component is a form element whose value is controlled by React state.
We use useState to store the input value and onChange to update the state.

*/
import { useState } from "react";

function TextInput() {

    // State for Name
    const [name, setName] = useState("");

    return (

        <div
            style={{
                textAlign: "center",
                marginTop: "40px"
            }} >
            <h2>Text Input</h2>

            <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                    width: "250px",
                    padding: "8px"
                }} />

            <h3>Hello, {name}</h3>

        </div>

    );

}

export default TextInput;

/*

Expected Output

        Text Input

[ Enter Your Name ]

Hello,

----------------------------

User Types

Kalai

----------------------------

Output

Hello, Kalai

----------------------------

*/