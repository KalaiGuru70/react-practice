/*
Topic      : React Lists & Keys
Program    : Fruit List
Purpose    : Display a list of fruits using the map() method.

Definition :
A List is a collection of multiple items.
The map() method is used to loop through an array and display each item in React.

This project demonstrates:
1. Array
2. List Rendering
3. map() Method
4. key Prop
5. Dynamic UI Rendering
*/

function FruitList() {

    // Fruit List
    const fruits = [ "Apple", "Banana", "Cherry","Date", "Orange", "Grapes", "Mango"];

    return (
        <div>
            <h2>Fruit List</h2>

            {fruits.map((fruit, index) => (
                <h3 key={index}> {fruit}</h3>
            ))}
        </div>
    );

}

export default FruitList;

/*

Expected Output

Fruit List

 Apple
 Banana
 Cherry
 Date
 Orange
 Grapes
 Mango
*/
