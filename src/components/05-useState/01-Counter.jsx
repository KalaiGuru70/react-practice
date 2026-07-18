/*
Topic   : React useState Hook
Program : Counter Application
Purpose : Learn how to create, manage, and update state using the useState Hook.

Definition:

The useState Hook is a built-in React Hook that allows
functional components to create and manage state.

State is data that can change over time.
Whenever the state changes, React automatically
re-renders the component and updates the UI.
*/

import { useState } from "react";

function Counter() {

  // Create state with initial value 0
  const [count, setCount] = useState(0);

  // Increase the count by 1
  function increase() {
    setCount(count + 1);
  }

  // Decrease the count by 1
  function decrease() {
    setCount(count - 1);
  }

  // Reset the count to 0
  function reset() {
    setCount(0);
  }

  // JSX UI
  return (
    <div
      style={{
        width: "320px",
        margin: "40px auto",
        padding: "20px",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)"
      }}
    >
      <h2>Counter Application</h2>

      <h1>{count}</h1>

      <button onClick={increase}>Increase</button>

      <button onClick={decrease} style={{ marginLeft: "10px" }}>
        Decrease
      </button>

      <button onClick={reset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

// Export the component for use in other files.
export default Counter;

/*
Expected Output

    Counter Application

           0

[ Increase ] [ Decrease ] [ Reset ]

Click Increase
0 → 1 → 2 → 3 ...

Click Decrease
3 → 2 → 1 → 0 ...

Click Reset
Count becomes 0.
*/