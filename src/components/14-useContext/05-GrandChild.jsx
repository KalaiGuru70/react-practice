// Topic: useContext
// Program: Access Context Data
// Purpose: Get data without props

import { useContext } from "react";
import UserContext from "./01-UserContext";


function GrandChild() {

  const user = useContext(UserContext);


  return (
    <div>

      <h3>GrandChild Component</h3>

      <p>User Name: {user}</p>

    </div>
  );
}


export default GrandChild;