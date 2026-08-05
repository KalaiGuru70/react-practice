// Topic: useContext
// Program: Child Component
// Purpose: Pass control to GrandChild

import GrandChild from "./05-GrandChild";

function Child() {

  return (
    <div>

      <h3>Child Component</h3>

      <GrandChild />

    </div>
  );
}

export default Child;