/*
Topic   : React JSX
Program : JSX Self Closing Tags
Purpose : Learn how to use self-closing tags correctly in JSX.

Definition:

In JSX, elements that do not have closing content must be written as
self-closing tags. Tags such as <input>, <br />, <hr />, and <img />
must always end with '/>' to follow JSX syntax rules.
*/

function JSXSelfClosing() {
  // JSX UI
  return (
    <div>
      <h2>Login Form</h2>

      <input type="text" placeholder="Enter username" />
      <br />

      <input type="password" placeholder="Enter password" />
      <br />

      <input type="submit" value="Login" />

      <hr />

      <p>Don't have an account? Register here.</p>
    </div>
  );
}

// Export the component for use in other files.
export default JSXSelfClosing;


/*
Expected Output:

Login Form

[ Enter username ]

[ Enter password ]

[ Login ]


Don't have an account? Register here.
*/