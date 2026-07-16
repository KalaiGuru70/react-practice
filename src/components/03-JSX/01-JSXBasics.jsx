/*
Topic   : React JSX
Program : JSX Basics
Purpose : Learn how to write JSX and use JavaScript expressions inside JSX.

Definition:

JSX (JavaScript XML) is a syntax extension for JavaScript that allows
developers to write HTML-like code inside JavaScript. It also supports
JavaScript expressions using curly braces {} to create dynamic and
interactive user interfaces.
*/

function JSXBasics() {
  // Declare variables
  const name = "Suresh";
  const age = 21;
  const city = "Coimbatore";
  const isWorking = true;

  // JSX UI
  return (
    <div>
      <h2>JSX Basics</h2>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>Working: {isWorking ? "Yes" : "No"}</p>
      <p>Math: {10 + 20}</p>
      <p>Upper: {name.toUpperCase()}</p>
    </div>
  );
}

// Export the component for use in other files.
export default JSXBasics;
/*
Expected Output:

JSX Basics

Name: Suresh
Age: 21
City: Coimbatore
Working: Yes
Math: 30
Upper: Suresh
*/