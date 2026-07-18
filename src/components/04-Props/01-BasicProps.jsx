/*
Topic   : React Props
Program : Basic Props
Purpose : Passing data from a Parent Component to a Child Component using Props.

Definition:

Props (Properties) are used to pass data from a Parent Component
to a Child Component. Props make components dynamic, reusable,
and allow the same component to display different data.
*/

function UserProfile(props) {
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
        User Profile
      </h2>

    <p><strong>Name:</strong> {props.name}</p>
    <p><strong>Role:</strong> {props.role}</p>
    <p><strong>Location:</strong> {props.location}</p>
    </div>
  );
}

function BasicProps() {
  // Parent Component
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "30px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <UserProfile
        name="Selva"
        role="Frontend Developer"
        location="Coimbatore"
      />
    </div>
  );
}

// Export the Parent Component.
export default BasicProps;


/*
Expected Output:

             User Profile

Name      : Selva
Role      : Frontend Developer
Location  : Coimbatore


*/