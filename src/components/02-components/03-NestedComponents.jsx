/*
Topic   : React Components
Program : Nested Components (E-Commerce Navbar)
Purpose : Learn how to create nested components in React.

Definition:
Nested Components are components that are used inside another component.
A parent component combines multiple child components to build a complete
User Interface (UI). This makes the code modular, reusable, and easy to maintain.
*/


function Logo() {
  // Logo component
  return (
    <h2 style={{ color: "#2563eb" }}>
      🛒 ShopEasy
    </h2>
  );
}

function SearchBar() {
  // Search bar component
  return (
    <p
      style={{
        backgroundColor: "#f3f4f6",
        padding: "8px",
        borderRadius: "6px",
      }}
    >
      🔍 Search products...
    </p>
  );
}

function CartIcon() {
  // Shopping cart component
  return (
    <p style={{ color: "#dc2626", fontWeight: "bold" }}>
      🛒 Cart (3 items)
    </p>
  );
}

function Navbar() {
  // Parent component that combines all child components
  return (
    <nav
      style={{
        backgroundColor: "#ffffff",
        padding: "20px",
        border: "2px solid #2563eb",
        borderRadius: "10px",
        width: "400px",
        margin: "30px auto",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Logo />
      <SearchBar />
      <CartIcon />
    </nav>
  );
}

// Export the parent component for use in other files.
export default Navbar;


/*
Expected Output:

🛒 ShopEasy

🔍 Search products...

🛒 Cart (3 items)
*/