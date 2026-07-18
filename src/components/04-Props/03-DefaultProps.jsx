/*
Topic   : React Props
Program : Default Props
Purpose : Using default values for props when the Parent Component
          does not pass any data.

Definition:

Default Props are fallback values assigned to props.
If the Parent Component does not pass a value,
the Child Component automatically uses the default value.
*/

function EmployeeCard({
  name = "Guest Employee",
  department = "Not Assigned",
  experience = "Fresher",
}) {
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
        Employee Profile
      </h2>

      <p><strong>Name:</strong> {name}</p>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Experience:</strong> {experience}</p>
    </div>
  );
}

function DefaultProps() {
  // Parent Component
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "30px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* No props are passed */}
      <EmployeeCard />
    </div>
  );
}

// Export the Parent Component.
export default DefaultProps;


/*
Expected Output:

           Employee Profile

Name        : Guest Employee
Department  : Not Assigned
Experience  : Fresher

(The default values are displayed because
the Parent Component does not pass any props.)
*/