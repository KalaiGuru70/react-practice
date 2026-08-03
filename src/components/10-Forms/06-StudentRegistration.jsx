/*
Topic      : React Forms (Multiple Inputs)
Program    : Student Registration Form
Purpose    : Get multiple input values using one object state and display the entered details.

Definition :
Multiple Inputs use a single object state to store all form values.
Each input is identified using the name attribute and updated using onChange.

              h-AS
*/

import { useState } from "react";

function StudentRegistration() {

    // Object State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        department: ""
    });

    // Handle Input Change
    function handleChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    }

    return (

        <div
            style={{
                textAlign: "center",
                marginTop: "40px"
            }}
        >

            <h2>Student Registration Form</h2>

            <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
            />

            <br /><br />

            <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
            />

            <br /><br />

            <input
                type="text"
                name="department"
                placeholder="Enter Your Department"
                value={formData.department}
                onChange={handleChange}
            />

            <hr />

            <h3>Student Details</h3>

            <p><strong>Name :</strong> {formData.name}</p>

            <p><strong>Email :</strong> {formData.email}</p>

            <p><strong>Department :</strong> {formData.department}</p>

        </div>

    );

}

export default StudentRegistration;

/*

Expected Output

Student Registration Form

[ Enter Your Name ]

[ Enter Your Email ]

[ Enter Your Department ]

--------------------------------

Student Details

Name :

Email :

Department :

--------------------------------

User Types

Name : Kalai

Email : kalai@gmail.com

Department : CSBS

--------------------------------

Output

Student Details

Name : Kalai

Email : kalai@gmail.com

Department : CSBS

--------------------------------



*/