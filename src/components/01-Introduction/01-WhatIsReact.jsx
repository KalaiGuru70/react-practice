/*

Topic   : React Introduction
Program : What is React?
Purpose : Display basic information about React using JSX.

*/

function WhatIsReact() {
  // Main UI of the component
  return (
    <div>
      <h1>What is React?</h1>
      <p>React is an open-source JavaScript library.</p>
      <p>Developed by Facebook (Meta) in 2013.</p>
      <p>Used for building fast and interactive User Interfaces.</p>
      <p>Follows Component-Based Architecture.</p>
      <p>Uses Virtual DOM for better performance.</p>
    </div>
  );
}

// Export the component to use it in other files.
export default WhatIsReact;


/*
Expected Output:

What is React?

React is an open-source JavaScript library.
Developed by Facebook (Meta) in 2013.
Used for building fast and interactive User Interfaces.
Follows Component-Based Architecture.
Uses Virtual DOM for better performance.

*/