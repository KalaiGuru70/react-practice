/*
Topic      : React Lists & Keys
Program    : Product List
Purpose    : Display a list of products using the map() method.

Definition :
The map() method is used to loop through an array and display each item.
The key prop helps React identify each item uniquely.

This project demonstrates:
1. Array of Objects
2. List Rendering
3. map() Method
4. key Prop
5. Dynamic UI Rendering
*/

function ProductList() {

    // Product List
    const products = [
        { id: 1, name: "Wireless Mouse", price: 799 },
        { id: 2, name: "Keyboard", price: 1499 },
        { id: 3, name: "Monitor", price: 8999 },
        { id: 4, name: "Headphones", price: 1999 },
        { id: 5, name: "Webcam", price: 2499 }
    ];

    return (
        <div>
            <h2>Product List</h2>

            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Price : ₹{product.price}</p>
                    <hr />
                </div>
            ))}

        </div>
    );

}

export default ProductList;

/*

Expected Output

Product List

Wireless Mouse
Price : ₹799

--------------------

Keyboard
Price : ₹1499

--------------------

Monitor
Price : ₹8999

--------------------

Headphones
Price : ₹1999

--------------------

Webcam
Price : ₹2499

--------------------

*/