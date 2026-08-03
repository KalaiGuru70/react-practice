/*
Topic      : React Forms (Controlled Component)
Program    : Internship Availability
Purpose    : Allow the user to indicate whether they are available for an internship and display the current status.

Definition :
A Checkbox allows the user to select or deselect an option.
A Controlled Component stores the checkbox state in React state.


*/

import { useState } from "react";

function InternshipAvailability() {

    // State for Internship Availability
    const [available, setAvailable] = useState(false);

    return (

        <div
            style={{
                textAlign: "center",
                marginTop: "40px"
            }} >

            <h2>Internship Availability</h2>

            <label>

                <input
                    type="checkbox"
                    checked={available}
                    onChange={(e) => setAvailable(e.target.checked)}/>

                {" "}Available for Internship

            </label>

            <h3>Status : {available ? "Available" : "Not Available"}</h3>

        </div>

    );

}

export default InternshipAvailability;

/*

Expected Output

Internship Availability

☐ Available for Internship

Status : Not Available

----------------------------------

User Clicks Checkbox

☑ Available for Internship

----------------------------------

Output

Status : Available

----------------------------------



*/