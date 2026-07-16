/*
Topic   : React JSX
Program : JSX className
Purpose : Learn how to use the className attribute for applying CSS classes in JSX.

Definition:

In React JSX, the class attribute is written as className because
'class' is a reserved keyword in JavaScript. The className attribute
is used to apply CSS styles to HTML elements.
*/

function JSXClassName() {
  // JSX UI
  return (
    <div className="profile-card">
      <h2 className="title">Student Profile</h2>
      <p className="info">Name: Selva</p>
      <p className="info">College: Nehru Institute</p>
      <p className="info">CGPA: 8.9</p>
    </div>
  );
}

// Export the component for use in other files.
export default JSXClassName;


/*
Expected Output:

Student Profile

Name: Selva
College: Nehru Institute
CGPA: 8.9

(The styles defined in the CSS classes
'profile-card', 'title', and 'info'
will be applied to the component.)
*/