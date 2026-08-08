/*
Topic: useMemo
Program: Memoize a Calculated Value
Purpose: To avoid unnecessary recalculation during re-renders.

Definition:
useMemo is a React Hook that remembers a calculated value.
The calculation runs again only when its dependencies change.

*/

import { useState, useMemo } from "react";

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    console.log("Calculation Running");

    return number * 100;
  }, [number]);

  return (
    <div>
      <h2>Number: {number}</h2>

      <h2>Result: {result}</h2>

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>

      <br />
      <br />

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default UseMemoExample;


/*Output:

Number: 1
Result: 100
[ Change Number ]

Count: 0
[ Increase Count ]

After clicking Change Number:

Number: 2
Result: 200

After clicking Increase Count:

Number: 2
Result: 200
Count: 1
*/