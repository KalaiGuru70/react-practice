/*
Topic      : React Lifting State Up
Program    : Counter Display
Purpose    : Display the current count.

Definition :
This component does not have its own state.
It receives the count value from the parent component using props.

This project demonstrates:
1. Props
2. Display Data
3. Lifting State Up
*/

function CounterDisplay({ count }) {

    return (

        <div>

            <h2>Counter Display</h2>
            <h3>Count : {count}</h3>

        </div>

    );

}

export default CounterDisplay;