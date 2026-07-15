/*
Topic   : React Introduction
Program : React Info Card
Purpose : Display basic information about React in a card format.
*/

function ReactInfoCard() {
  // Main UI of the component
  return (
    <div>
      <h1>⚛️ React Info Card</h1>

      <p><strong>What:</strong> JavaScript Library</p>
      <p><strong>By:</strong> Facebook (Meta)</p>
      <p><strong>Why:</strong> Fast, Reusable, Component-Based</p>
      <p><strong>Used In:</strong> Facebook, Instagram, Netflix</p>
    </div>
  );
}

// Export the component for use in other files.
export default ReactInfoCard;

/*
Expected Output:

⚛️ React Info Card

What: JavaScript Library
By: Facebook (Meta)
Why: Fast, Reusable, Component-Based
Used In: Facebook, Instagram, Netflix
*/