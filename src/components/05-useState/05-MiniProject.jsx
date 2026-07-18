/*
Topic      : React useState Hook
Program    : Feedback Form
Purpose    : Collect user feedback using useState.

Definition :
The useState Hook is used to store and update data.
This project demonstrates:
1. Multiple useState
2. Form Input
3. Button Click
4. Conditional Rendering
*/

import { useState } from "react";

function FeedbackForm() {

    // State for Name
    const [name, setName] = useState("");

    // State for Feedback
    const [feedback, setFeedback] = useState("");

    // State for Submission
    const [submitted, setSubmitted] = useState(false);

    // Submit Button Function
    function handleSubmit() {

        if (name && feedback) {
            setSubmitted(true);
        }

        else {
            alert("Please fill all fields!");
        }

    }

    // Reset Form
    function handleReset() {
        setName("");
        setFeedback("");
        setSubmitted(false);
    }

    return (

        <div
            style={{
                width: "420px",
                margin: "40px auto",
                padding: "25px",
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px gray",
                fontFamily: "Arial"
            }}
        >

            <h2 style={{ textAlign: "center" }}>
                 Feedback Form
            </h2>

            {

                !submitted ?

                (

                    <div>

                        <label>
                            <strong>Name</strong>
                        </label>

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

                        <label>
                            <strong>Feedback</strong>
                        </label>

                        <textarea
                            placeholder="Enter Your Feedback"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            rows="5"
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "5px",
                                marginBottom: "20px",
                                borderRadius: "5px",
                                border: "1px solid gray",
                                boxSizing: "border-box"
                            }}
                        >
                        </textarea>

                        <button
                            onClick={handleSubmit}
                            style={{
                                width: "100%",
                                padding: "10px",
                                backgroundColor: "green",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}
                        >
                            Submit Feedback
                        </button>

                    </div>

                )

                :

                (

                    <div>

                        <h3 style={{ color: "green" }}>
                             Thank You!
                        </h3>

                        <p>
                            <strong>Name :</strong> {name}
                        </p>

                        <p>
                            <strong>Feedback :</strong>
                        </p>

                        <p>{feedback}</p>

                        <button
                            onClick={handleReset}
                            style={{
                                width: "100%",
                                padding: "10px",
                                backgroundColor: "orange",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}
                        >
                            Write Another Feedback
                        </button>

                    </div>

                )

            }

        </div>

    );

}

export default FeedbackForm;

/*

Expected Output

 Feedback Form


Name

+-------------------------------+
| Enter Your Name               |
+-------------------------------+

Feedback

+-------------------------------+
| Enter Your Feedback           |
|                               |
|                               |
+-------------------------------+

[ Submit Feedback ]



If Empty

Please fill all fields!



After Submit

 Thank You!

Name :
Kalaiselvi

Feedback :
React useState is easy to understand.

[ Write Another Feedback ]

--------------------------------------

Click

Write Another Feedback

↓

Form Opens Again

*/