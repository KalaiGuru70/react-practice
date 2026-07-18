/*
Topic   : React Props
Program : Job Card using Destructuring Props
Purpose : Learn how to extract values directly from the props object
          using destructuring.

Definition:

Destructuring Props is the process of directly extracting
values from the props object. It makes the code shorter,
cleaner, and easier to read.
*/

// Child Component
function JobCard({
  company,
  role,
  location,
  salary,
  experience,
}) {
  return (
    <div
      style={{
        border: "2px solid #2563eb",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "15px",
        backgroundColor: "#f8fbff",
        boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
      }}
    >
      <h2 style={{ color: "#2563eb" }}>{company}</h2>

      <p><strong>Role:</strong> {role}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Salary:</strong> {salary}</p>
      <p><strong>Experience:</strong> {experience}</p>
    </div>
  );
}

// Parent Component
function DestructuringProps() {
  return (
    <div
      style={{
        maxWidth: "650px",
        margin: "30px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <JobCard
        company="Zoho"
        role="Frontend Developer"
        location="Chennai"
        salary="₹6 LPA"
        experience="Fresher"
      />

      <JobCard
        company="TCS"
        role="React Developer"
        location="Coimbatore"
        salary="₹4 LPA"
        experience="0-1 Years"
      />

      <JobCard
        company="Infosys"
        role="UI Developer"
        location="Bangalore"
        salary="₹5 LPA"
        experience="Fresher"
      />
    </div>
  );
}

// Export Parent Component
export default DestructuringProps;


/*
Expected Output

-------
            Zoho

Role        : Frontend Developer
Location    : Chennai
Salary      : ₹6 LPA
Experience  : Fresher
---------------------------------------

---------------------------------------
             TCS

Role        : React Developer
Location    : Coimbatore
Salary      : ₹4 LPA
Experience  : 0-1 Years
---------------------------------------

---------------------------------------
           Infosys

Role        : UI Developer
Location    : Bangalore
Salary      : ₹5 LPA
Experience  : Fresher
---------------------------------------
*/