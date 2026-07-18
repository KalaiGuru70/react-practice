/*
Topic      : React useState Hook
Program    : Show / Hide Password
Purpose    : Toggle password visibility using useState.

Definition :
The useState Hook is used to store and update data.
Whenever the state changes, React automatically updates the UI.
*/

import { useState } from "react";

function ShowHidePassword() {

    // State to store password visibility
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div
            style={{
                width: "350px",
                margin: "50px auto",
                padding: "25px",
                textAlign: "center",
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                fontFamily: "Arial"
            }}
        >

            <h2> Show / Hide Password</h2>

            <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                style={{
                    width: "90%",
                    padding: "10px",
                    fontSize: "16px",
                    marginBottom: "15px",
                    borderRadius: "5px",
                    border: "1px solid gray"
                }}
            />

            <br />

            <button
                onClick={() => setShowPassword(!showPassword)}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: showPassword ? "#dc3545" : "#007bff",
                    color: "white",
                    cursor: "pointer"
                }}
            >
                {showPassword ? "Hide Password" : "Show Password"}
            </button>

        </div>
    );
}

export default ShowHidePassword;

/*
Expected Output


         Show / Hide Password


Password :
**************

[ Show Password ]

Click Show Password

mypassword123

Button Changes To

[ Hide Password ]

Click Hide Password

**************

*/