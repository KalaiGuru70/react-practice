/*
Topic      : React Conditional Rendering
Program    : Product Stock Status
Purpose    : Display the "Buy Now" button only when the product is in stock.

Definition :
Conditional Rendering is the process of displaying different UI based on a condition.


*/

function LogicalAND() {

    // Product Stock Status
    const inStock = true;

    return (

        <div
            style={{
                width: "350px",
                margin: "40px auto",
                padding: "20px",
                border: "1px solid gray",
                borderRadius: "8px",
                textAlign: "center",
                fontFamily: "Arial"
            }}
        >

            <h2>Product Details</h2>

            <hr />

            <h3>Wireless Mouse</h3>

            <p><strong>Price :</strong> ₹799</p>

            <p><strong>Status :</strong> {inStock ? "In Stock" : "Out of Stock"}</p>

            {

                inStock &&

                <button
                    style={{
                        padding: "10px 20px",
                        marginTop: "10px"
                    }}> Buy Now
                </button>

            }

        </div>

    );

}

export default LogicalAND;

/*

Expected Output

Product Details

-----------------------

Wireless Mouse

Price : ₹799

Status : In Stock

[ Buy Now ]

----------------------------------

If

const inStock = false;

↓

Product Details

-----------------------

Wireless Mouse

Price : ₹799

Status : Out of Stock

(Button is Hidden)

*/