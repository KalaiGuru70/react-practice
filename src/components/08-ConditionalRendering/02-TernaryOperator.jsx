/*
Topic      : React Conditional Rendering
Program    : Restaurant Status
Purpose    : Display whether the restaurant is open or closed.

Definition :
Conditional Rendering is the process of displaying different UI based on a condition.


*/

function TernaryOperator() {

    // Restaurant Status
    const restaurantOpen = true;

    return (

        <div
            style={{
                width: "350px",
                margin: "40px auto",
                padding: "25px",
                textAlign: "center",
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px gray",
                fontFamily: "Arial"
            }}>

            <h2>Restaurant Status</h2>

            {
            restaurantOpen ?( <h1 style={{ color: "green" }}> Restaurant is Open</h1> ):( <h1 style={{ color: "red" }}> Restaurant is Closed</h1>)

            }

        </div>

    );

}

export default TernaryOperator;

/*

Expected Output

Restaurant Status

Restaurant is Open

----------------------------------

If

const restaurantOpen = false;

↓

Restaurant Status

Restaurant is Closed

*/