// Topic: useContext
// Program: Parent Component
// Purpose: Create component hierarchy

import Child from "./04-Child";

function Parent() {

  return (
    <div>

      <h3>Parent Component</h3>

      <Child />

    </div>
  );
}

export default Parent;