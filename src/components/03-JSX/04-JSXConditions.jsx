/*
Topic   : React JSX
Program : JSX Conditions
Purpose : Learn how to use conditional rendering in JSX using the ternary operator.

Definition:

Conditional Rendering in React allows components to display different
content based on a condition. JSX commonly uses the ternary operator (?)
to decide what should be rendered dynamically.
*/

function JSXConditions() {
  // Declare variables
  const mark = 95;
  const isPass = mark >= 60;
  const grade = mark >= 95 ? "A" : mark >= 75 ? "B" : mark >= 60 ? "C" : "F";

  // JSX UI
  return (
    <div>
      <h2>Result Card</h2>

      <p>Mark: {mark}</p>
      <p>Result: {isPass ? "Pass" : "Fail"}</p>
      <p>Grade: {grade}</p>
    </div>
  );
}

// Export the component for use in other files.
export default JSXConditions;

/*
Expected Output:

Result Card

Mark: 95
Result: Pass
Grade: A
*/