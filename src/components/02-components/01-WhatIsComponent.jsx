/*
Topic      : React Components
Program    : What is a React Component?
Purpose    : Understand the basic concept of a React Component.
Definition:
A React Component is a reusable piece of User Interface (UI).
It is a JavaScript function that returns JSX.
Components help divide the UI into small, independent, and reusable parts.
This makes React applications easier to develop, maintain, and scale.
*/

function WhatIsComponent() {
  // Main UI of the component
  return (
    <div style={{backgroundColor :"#f5f5f5",padding : "20px",borderRadius:"8px", margin :"10px"}}>
      <h2 style={{color: "#2c3e50"}}>Employee Profile</h2>
      <p Style={{color: "#555"}}>Name: John Doe</p>
      <p style={{color: "#555"}}>Department: Software Development</p>
      <p style={{color: "#555"}}>Role: Front-End Developer</p>
      <p style={{color: "#555"}}>Experience: 2 Years</p>
      <p style={{color: "#555"}}>Location: Chennai</p>
    </div>
  );
}
// Export the component for use in other files.
export default WhatIsComponent;


/*
Expected Output:
Employee Profile
Name: John Doe
Department: Software Development
Role: Front-End Developer
Experience: 2 Years
Location: Chennai
*/ 