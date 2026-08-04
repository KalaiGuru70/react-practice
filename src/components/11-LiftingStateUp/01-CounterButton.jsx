/*
Topic      : React Lifting State Up
Program    : Counter Button
Purpose    : Increase the count by clicking the button.

Definition :
This component does not have its own state.
It receives the count update function from the parent component using props.

This project demonstrates:
1. Props
2. Button Click
3. onClick
4. Lifting State Up
*/

function CounterButton({ setCount }) {

    return (

        <div>
           <h2>Counter Button</h2>
            <button onClick={() => setCount((prev) => prev + 1)}>
                Increase
            </button>
        </div>

    );

}

export default CounterButton;