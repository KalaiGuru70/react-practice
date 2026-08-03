/*
Topic      : React Forms (Controlled Component)
Program    : Radio Button
Purpose    : Select the gender using radio buttons and display the selected gender.

Definition :
A Radio Button allows the user to select only one option from a group.
A Controlled Component stores the selected value in React state.


*/

import { useState } from "react";

function RadioButton() {

    // State for Gender
    const [gender, setGender] = useState("");

    return (

        <div
            style={{
                textAlign: "center",
                marginTop: "40px"
            }}>

            <h2>Radio Button</h2>

            <label>
                <input
                    type="radio"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={(e) => setGender(e.target.value)}/>

                Male

            </label>

            <br /><br />

            <label>

                <input
                    type="radio"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={(e) => setGender(e.target.value)}
                />

                Female

            </label>
            <h3>Selected Gender : {gender}</h3>
        </div>

    );

}

export default RadioButton;

/*

Expected Output

        Radio Button

( ) Male

( ) Female

Selected Gender :

----------------------------------

User Selects

(●) Male

----------------------------------

Output

Selected Gender : Male

----------------------------------

User Selects

(●) Female

----------------------------------

Output

Selected Gender : Female

----------------------------------

*/