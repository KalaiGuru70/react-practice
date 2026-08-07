// Topic: API Fetch
// Program: Fetch Users
// Purpose: Fetch user data from an API and display it in React.

import { useState, useEffect } from "react";

function FetchUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>API Fetch Example</h2>

      <p>Total Users: {users.length}</p>

      {users.map((user) => (
        <p key={user.id}>
          {user.firstName} {user.lastName}
        </p>
      ))}
    </div>
  );
}

export default FetchUsers;


/*API Fetch Example

Total Users: 30

Emily Johnson
Michael Williams
Sophia Brown
James Davis
Emma Miller
...
*/