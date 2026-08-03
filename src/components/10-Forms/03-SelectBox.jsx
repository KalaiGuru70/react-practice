/*
Topic      : React Forms (Controlled Component)
Program    : Select Box
Purpose    : Select one course from the dropdown list and display the selected course.

Definition :
A Select Box is used to choose one option from multiple options.
A Controlled Component stores the selected value in React state.

*/

import { useState } from "react";

function SelectBox() {

    // State for Course
    const [course, setCourse] = useState("");

    return (

        <div
            style={{
                textAlign: "center",
                marginTop: "40px"
            }}
        >
            <h2>Select Box</h2>

            <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                style={{
                    width: "200px",
                    padding: "8px"
                }}>

                <option value="">Select Course</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="React">React</option>
                <option value="Node.js">Node.js</option>

            </select>

            <h3>Selected Course : {course}</h3>

        </div>
        );

}

export default SelectBox;

/*

Expected Output

        Select Box

[ Select Course ▼ ]

Selected Course :

----------------------------------

User Selects

React

----------------------------------

Output

Selected Course : React

----------------------------------

*/