/*
Topic      : React useState Hook
Program    : Form Input Tracker
Purpose    : Track user input values using useState.

Definition:
The useState Hook is used to store and update data.
Whenever the user types in the input field,
React updates the state and automatically updates the UI.
*/

import { useState } from "react";

function FormInput() {

    // State for Name
    const [name, setName] = useState("");

    // State for Email
    const [email, setEmail] = useState("");

    return (

        <div
            style={{
                width: "400px",
                margin: "50px auto",
                padding: "25px",
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                fontFamily: "Arial"
            }}
        >

            <h2 style={{ textAlign: "center" }}>
                 Form Input Tracker
            </h2>

            <label><strong>Name</strong></label>

            <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "5px",
                    marginBottom: "15px",
                    borderRadius: "5px",
                    border: "1px solid gray",
                    boxSizing: "border-box"
                }}
            />

            <label><strong>Email</strong></label>

            <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            <hr />

            <h3>Live Preview</h3>

            <p>
                <strong>Name :</strong> {name}
            </p>

            <p>
                <strong>Email :</strong> {email}
            </p>

        </div>

    );

}

export default FormInput;

/*

Expected Output



           Form Input Tracker

Name
+------------------------------+
| Enter Your Name              |
+------------------------------+

Email
+------------------------------+
| Enter Your Email             |
+------------------------------+


Live Preview

Name  :

Email :


If User Types

Name  : Kalaiselvi

Email : kalai@gmail.com



Live Preview

Name  : Kalaiselvi

Email : kalai@gmail.com



*/