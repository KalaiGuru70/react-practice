/*
Topic   : React Props
Program : Internship Portal
Purpose : Creating reusable internship cards using Props.

Definition:

Props are used to pass data from a Parent component
to a Child component. They make components reusable
by displaying different information without changing
the component code.
*/

/* Child Component */

function InternshipCard({company, role,location,mode,stipend,}) {
    return (
        <div
            style={{
                border: "2px solid #2563eb",
                borderRadius: "8px",
                padding: "15px",
                margin: "15px 0",
                backgroundColor: "#f8fafc",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
            }}
        >
            <h3>{company}</h3>

            <p><strong>Role:</strong> {role}</p>

            <p><strong>Location:</strong> {location}</p>

            <p><strong>Mode:</strong> {mode}</p>

            <p><strong>Stipend:</strong> {stipend}</p>

            <button
                style={{
                    marginTop: "10px",
                    padding: "8px 16px",
                    backgroundColor: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Apply Now
            </button>
        </div>
    );
}

/* Parent Component */

function MiniProject() {
    return (
        <div
            style={{
                maxWidth: "650px",
                margin: "30px auto",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <h2 style={{ textAlign: "center" }}>
                Internship Portal
            </h2>

            <InternshipCard
                company="Zoho"
                role="Frontend Developer Intern"
                location="Chennai"
                mode="Hybrid"
                stipend="₹20,000 / month"
            />

            <InternshipCard
                company="TCS"
                role="React Developer Intern"
                location="Bangalore"
                mode="Work From Office"
                stipend="₹18,000 / month"
            />

            <InternshipCard
                company="Infosys"
                role="Web Developer Intern"
                location="Coimbatore"
                mode="Remote"
                stipend="₹15,000 / month"
            />
        </div>
    );
}

export default MiniProject;

/*
Expected Output:

                Internship Portal

-------------------------------------------------

Zoho

Role       : Frontend Developer Intern
Location   : Chennai
Mode       : Hybrid
Stipend    : ₹20,000 / month

[ Apply Now ]

-------------------------------------------------

TCS

Role       : React Developer Intern
Location   : Bangalore
Mode       : Work From Office
Stipend    : ₹18,000 / month

[ Apply Now ]

-------------------------------------------------

Infosys

Role       : Web Developer Intern
Location   : Coimbatore
Mode       : Remote
Stipend    : ₹15,000 / month

[ Apply Now ]

-------------------------------------------------
*/