// Topic: useContext
// Program: User Context Example
// Purpose: Provide data to component tree

import UserContext from "./01-UserContext";
import Parent from "./03-Parent";

function UserContextExample() {

  const user = "Kalaiselvi";

  return (
    <UserContext.Provider value={user}>

      <h2>User Context Example</h2>

      <Parent />

    </UserContext.Provider>
  );
}

export default UserContextExample;