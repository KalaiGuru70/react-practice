/*
Topic   : React Components
Program : Header and Footer Components
Purpose : Learn how to create separate Header and Footer components in React.

Definition:
Header and Footer are reusable React components.
The Header displays the top section of a web page, while the Footer displays
the bottom section. These components can be combined to build a complete page
and reused across multiple pages.
*/


function Header() {
  // Header component
  return (
    <header
      style={{
        backgroundColor: "#ef4444",
        color: "white",
        textAlign: "center",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h1> Pizza Palace</h1>
      <p>Home | Menu | Order | Contact</p>
    </header>
  );
}

function Footer() {
  // Footer component
  return (
    <footer
      style={{
        backgroundColor: "#1f2937",
        color: "white",
        textAlign: "center",
        padding: "15px",
        borderRadius: "10px",
        marginTop: "15px",
      }}
    >
      <p>📞 9876543210</p>
      <p> Coimbatore, Tamil Nadu</p>
      <p>© 2024 Pizza Palace</p>
    </footer>
  );
}

function RestaurantPage() {
  // Main UI of the component
  return (
    <div
      style={{
        width: "500px",
        margin: "40px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Header />
      <Footer />
    </div>
  );
}

// Export the parent component for use in other files.
export default RestaurantPage;


/*
Expected Output:

Pizza Palace
Home | Menu | Order | Contact

📞 9876543210
 Coimbatore, Tamil Nadu
© 2024 Pizza Palace
*/