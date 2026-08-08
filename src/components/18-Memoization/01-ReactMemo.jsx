
/*
Topic: React.memo
Program: Prevent Unnecessary Re-render
Purpose: To prevent a component from re-rendering when its props have not changed.

Definition:
React.memo is a higher-order component that helps prevent unnecessary
re-rendering of a component when its props remain unchanged.


*/

import { useState, memo } from "react";

const Profile = memo(function Profile() {
  console.log("Profile Rendered");

  return <h2>Profile Component</h2>;
});

function ReactMemoExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <Profile />
    </div>
  );
}

export default ReactMemoExample;


/*Output:

Count: 0
[ Increase ]
Profile Component

After clicking Increase:

Count: 1
[ Increase ]
Profile Component

After clicking again:

Count: 2
[ Increase ]
Profile Component
*/