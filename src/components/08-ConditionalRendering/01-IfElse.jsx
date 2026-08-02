/*
Topic      : React Conditional Rendering
Program    : Online Exam Result
Purpose    : Display pass or fail message based on the student's result.

Definition :
Conditional Rendering is the process of displaying different UI based on a condition.
*/

function IfElse() {

    // Student Result
    const isPassed = true;

    if (isPassed) {

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
                }}
            >

                <h2>Online Exam Result</h2>

                <h1 style={{ color: "green" }}>
                    Congratulations!
                </h1>

                <h3>You Passed</h3>

            </div>

        );

    }

    else {

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
                }} >

                <h2>Online Exam Result</h2>

                <h1 style={{ color: "red" }}> Better Luck Next Time</h1>

            </div>

        );

    }

}

export default IfElse;

/*

Expected Output

Online Exam Result

Congratulations!

You Passed

----------------------------

If

const isPassed = false;

↓

Online Exam Result

Better Luck Next Time

*/