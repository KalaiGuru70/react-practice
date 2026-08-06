// Topic: useReducer
// Program: Counter Example
// Purpose: Manage state using useReducer

import { useReducer } from "react";

// Reducer Function
function reducer(state, action) {

  switch (action.type) {

    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return 0;

    default:
      return state;
  }
}

function ReducerExample() {

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>

      <h2>useReducer Example</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>

    </div>
  );
}

export default ReducerExample;


/*--------------------------------

useReducer Example

Count: 0

[ Increment ]

[ Decrement ]

[ Reset ]

--------------------------------
*/