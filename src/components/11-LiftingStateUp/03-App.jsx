/*
Topic      : React Lifting State Up
Program    : Counter App
Purpose    : Store the count state in the parent component and share it with child components.

Definition :
The parent component stores the state.
Child components receive the state or update function using props.

This project demonstrates:
1. useState
2. Props
3. Lifting State Up
*/

import { useState } from "react";
import CounterButton from "./01-CounterButton";
import CounterDisplay from "./02-CounterDisplay";

function App() {

    // State in Parent Component
    const [count, setCount] = useState(0);

    return (

        <div>

            <h1>Lifting State Up</h1>
            <CounterButton setCount={setCount} />
            <CounterDisplay count={count} />

        </div>

    );

}

export default App;