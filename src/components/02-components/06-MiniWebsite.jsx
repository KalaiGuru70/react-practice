/*
Topic   : React Components
Program : Portfolio Mini Website
Purpose : Learn how to build a simple portfolio website by combining multiple React components.

Definition:
A Portfolio Website is created by combining multiple React components such as
Navbar, Hero, Skills, Projects, and Footer. Each component has a specific
responsibility, making the application modular, organized, reusable, and
easy to maintain.
*/

function Navbar() {
  // Navigation bar component
  return (
    <nav
      style={{
        backgroundColor: "#2563eb",
        color: "white",
        padding: "15px",
        textAlign: "center",
        borderRadius: "8px",
      }}
    >
      <h2>Selva P</h2>
      <p>Home | About | Skills | Projects | Contact</p>
    </nav>
  );
}

function Hero() {
  // Hero section component
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2>Hi, I'm Selva!</h2>
      <p>Frontend Developer</p>
      <p>HTML | CSS | JavaScript | React</p>
    </div>
  );
}

function Skills() {
  // Skills component
  return (
    <div
      style={{
        border: "2px solid #2563eb",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px 0",
      }}
    >
      <h2>My Skills</h2>
      <p>HTML5 & CSS3</p>
      <p>JavaScript ES6+</p>
      <p>React</p>
      <p>Basic Git & GitHub</p>
    </div>
  );
}

function Projects() {
  // Projects component
  return (
    <div
      style={{
        border: "2px solid #2563eb",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px 0",
      }}
    >
      <h2>My Projects</h2>
      <p>Todo App</p>
      <p>Weather App</p>
      <p>Expense Tracker</p>
    </div>
  );
}

function Footer() {
  // Footer component
  return (
    <footer
      style={{
        backgroundColor: "#1f2937",
        color: "white",
        padding: "15px",
        textAlign: "center",
        borderRadius: "8px",
        marginTop: "15px",
      }}
    >
      <p>Email: example@gmail.com</p>
      <p>© 2024 Portfolio. All rights reserved.</p>
    </footer>
  );
}

function Portfolio() {
  // Parent component that combines all child components
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "30px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

// Export the parent component for use in other files.
export default Portfolio;

/*
Expected Output:

Selva P
Home | About | Skills | Projects | Contact

Hi, I'm Selva!
Frontend Developer
HTML | CSS | JavaScript | React

My Skills
HTML5 & CSS3
JavaScript ES6+
React
Basic Git & GitHub

My Projects
Todo App
Weather App
Expense Tracker

Email: example@gmail.com
© 2024 Portfolio. All rights reserved.
*/

