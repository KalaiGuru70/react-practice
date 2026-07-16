/*
Topic   : React JSX
Program : JSX Expressions
Purpose : Learn how to use JavaScript expressions inside JSX to display dynamic data.

Definition:

JSX Expressions allow developers to use JavaScript code inside JSX by
enclosing it within curly braces {}. Expressions can perform calculations,
display variables, call methods, and create dynamic content in React
components.
*/

function JSXExpressions() {
  // Declare variables
  const price = 45000;
  const discount = 10;
  const finalPrice = price - (price * discount) / 100;

  // JSX UI
  return (
    <div>
      <h2>Product Price Calculator</h2>

      <p>Original Price: Rs. {price}</p>
      <p>Discount: {discount}%</p>
      <p>Final Price: Rs. {finalPrice}</p>
    </div>
  );
}

// Export the component for use in other files.
export default JSXExpressions;


/*
Expected Output:

Product Price Calculator

Original Price: Rs. 45000
Discount: 10%
Final Price: Rs. 40500
*/