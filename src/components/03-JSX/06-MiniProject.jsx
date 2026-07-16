/*
Topic   : React JSX
Program : Job Application Card
Purpose : Learn how to display data using JSX variables and conditional rendering.

Definition:

JSX allows JavaScript variables and expressions to be displayed
inside HTML-like syntax using curly braces {}. Conditional rendering
can be performed using the ternary operator (?) to show different
content based on a condition.
*/

function JobApplicationCard() {
  // Declare variables
  const applicant = "Selva";
  const role = "Frontend Developer";
  const company = "Zoho";
  const experience = "Fresher";
  const salary = 40000;
  const isEligible = true;

  // JSX UI
  return (
    <div>
      <h2>Job Application</h2>

      <p>Applicant: {applicant}</p>
      <p>Role: {role}</p>
      <p>Company: {company}</p>
      <p>Experience: {experience}</p>
      <p>Expected Salary: ₹{salary}</p>
      <p>Status: {isEligible ? "Eligible" : "Not Eligible"}</p>
      <p>Application: {isEligible ? "Submitted" : "Rejected"}</p>
    </div>
  );
}

// Export the component for use in other files.
export default JobApplicationCard;

/*
Expected Output:

Job Application

Applicant: Selva
Role: Frontend Developer
Company: Zoho
Experience: Fresher
Expected Salary: ₹40000
Status: Eligible
Application: Submitted
*/