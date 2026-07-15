/*
Topic   : React Components
Program : Reusable Components
Purpose : Learn how to create and reuse the same React component multiple times.

Definition:
A Reusable Component is a React component that can be used multiple times
within an application without rewriting the same code. It helps reduce code
duplication, improves maintainability, and makes the application modular.
*/


function ProductCard() {
  // Reusable product card component
  return (
    <div
      style={{
        border: "2px solid #2563eb",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "220px",
        backgroundColor: "#f9fafb",
      }}
    >
      <h3>Laptop</h3>
      <p>Price: ₹45,000</p>
      <p>Brand: Dell</p>
      <p>Rating: 5/5</p>
    </div>
  );
}

function ProductList() {
  // Parent component that reuses ProductCard multiple times
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Product List</h2>

      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

// Export the parent component for use in other files.
export default ProductList;


/*
Expected Output:

Product List

Laptop
Price: ₹45,000
Brand: Dell
Rating: 5/5

Laptop
Price: ₹45,000
Brand: Dell
Rating: 5/5

Laptop
Price: ₹45,000
Brand: Dell
Rating: 5/5
*/