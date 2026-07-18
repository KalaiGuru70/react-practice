/*
Topic   : React Props
Program : Multiple Props
Purpose : Passing multiple data from a Parent Component to a Child Component using Props.

Definition:

Multiple Props allow a Parent Component to pass more than one
piece of information to a Child Component. Each prop stores
different data, making the component reusable and dynamic.
*/

function EmployeeCard(props) {
  // Child Component
  return (
    <div
      style={{
        border: "2px solid #2563eb",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#f8fbff",
        boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
      }}
    >
      <h2
        style={{
          color: "#2563eb",
          textAlign: "center",
        }}
      >
        Employee ID Card
      </h2>

      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Employee ID:</strong> {props.employeeId}</p>
      <p><strong>Department:</strong> {props.department}</p>
      <p><strong>Experience:</strong> {props.experience}</p>
      <p><strong>Salary:</strong> {props.salary}</p>
    </div>
  );
}

function MultipleProps() {
  // Parent Component
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "30px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <EmployeeCard
        name="Selva"
        employeeId="EMP101"
        department="Frontend Development"
        experience="Fresher"
        salary="₹4 LPA"
      />
    </div>
  );
}

// Export the Parent Component.
export default MultipleProps;

/*
Expected Output:

          Employee ID Card

Name          : Selva
Employee ID   : EMP101
Department    : Frontend Development
Experience    : Fresher
Salary        : ₹4 LPA


*/

