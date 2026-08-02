/*
Topic      : React Event Handling
Program    : Login Form
Purpose    : Collect the username and display a welcome message after form submission.

Definition :
React Event Handling is used to respond to user actions such as button clicks, typing, and form submission.

This project demonstrates:
1. useState
2. onChange Event
3. Controlled Component
4. onSubmit Event
5. preventDefault()
*/

import { useState } from "react";

function LoginPage() {

    // State for Username
    const [username, setUsername] = useState("");

    // Handle Form Submission
    function handleSubmit(e) {

        e.preventDefault();

        alert(`Welcome ${username}`);

    }

    return (

        <div
            style={{
                width: "350px",
                margin: "40px auto",
                padding: "25px",
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px gray",
                fontFamily: "Arial"
            }}
        >

            <h2 style={{ textAlign: "center" }}>
                Login Form
            </h2>

            <form onSubmit={handleSubmit}>

                <label>
                    <strong>Username</strong>
                </label>

                <input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    Login
                </button>

            </form>

        </div>

    );

}

export default LoginPage;

/*

Expected Output

        Login Form

Username

+-----------------------------+
| Enter Username              |
+-----------------------------+

        [ Login ]

----------------------------------

*/