/*
Topic   : React Components
Program : Job Portal Company Cards
Purpose : Learn how to create multiple React components to display different company job details.

Definition:
Multiple Components are independent React components that work together
to build a complete user interface. Each component has its own responsibility,
making the application organized and easier to maintain.
*/

function CompanyCard() {
  // Company card for TCS
  return (
    <div
      style={{
        border: "2px solid #2563eb",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        backgroundColor: "#f9fafb",
      }}
    >
      <h3>TCS</h3>
      <p>Role: Frontend Developer</p>
      <p>Salary: ₹3.5 LPA</p>
      <p>Location: Chennai</p>
    </div>
  );
}

function CompanyCard2() {
  // Company card for Infosys
  return (
    <div
      style={{
        border: "2px solid #2563eb",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        backgroundColor: "#f9fafb",
      }}
    >
      <h3>Infosys</h3>
      <p>Role: React Developer</p>
      <p>Salary: ₹4 LPA</p>
      <p>Location: Bangalore</p>
    </div>
  );
}

function CompanyCard3() {
  // Company card for Zoho
  return (
    <div
      style={{
        border: "2px solid #2563eb",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        backgroundColor: "#f9fafb",
      }}
    >
      <h3>Zoho</h3>
      <p>Role: UI Developer</p>
      <p>Salary: ₹5 LPA</p>
      <p>Location: Chennai</p>
    </div>
  );
}

function JobPortal() {
  // Parent component that displays all company cards
  return (
    <div
      style={{
        width: "350px",
        margin: "30px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#2563eb" }}>
        Job Openings
      </h2>

      <CompanyCard />
      <CompanyCard2 />
      <CompanyCard3 />
    </div>
  );
}

// Export the parent component for use in other files.
export default JobPortal;


/*
Expected Output:

Job Openings

TCS
Role: Frontend Developer
Salary: ₹3.5 LPA
Location: Chennai

Infosys
Role: React Developer
Salary: ₹4 LPA
Location: Bangalore

Zoho
Role: UI Developer
Salary: ₹5 LPA
Location: Chennai
*/