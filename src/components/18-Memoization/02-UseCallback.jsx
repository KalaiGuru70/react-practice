
/*
Topic: useCallback
Program: Memoize a Function
Purpose: To prevent unnecessary recreation of a function during re-renders.

Definition:
useCallback is a React Hook that remembers a function between re-renders.
The function is recreated only when its dependencies change.

This project demonstrates:
1. Creating a function using useCallback.
2. Passing the function to a child component.
3. Using React.memo with the child component.
4. Preventing unnecessary re-rendering of the child component.
*/

import { useState, useCallback, memo } from "react";

const Button = memo(function Button({ onClick }) {
  console.log("Button Rendered");

  return (
    <button onClick={onClick}>
      Click Me
    </button>
  );
});

function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <Button onClick={handleClick} />
    </div>
  );
}

export default UseCallbackExample;

/*Output:

Count: 0
[ Increase Count ]
[ Click Me ]

After clicking Increase Count:

Count: 1
[ Increase Count ]
[ Click Me ]

After clicking Click Me:

Console:
Button Clicked
*/
