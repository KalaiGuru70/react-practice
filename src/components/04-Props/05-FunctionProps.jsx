/*
Topic   : React Props
Program : Function Props
Purpose : Passing a function from Parent component
          to Child component.

Definition:

Function Props are used to pass a function from a
Parent component to a Child component. The Child
component can execute the Parent's function when
an event occurs, such as a button click.
*/

/* Child Component */

function NotificationCard(props) {
    return (
        <div
            style={{
                border: "2px solid #2563eb",
                borderRadius: "8px",
                padding: "15px",
                margin: "15px 0",
                backgroundColor: "#f8fafc",
            }}
        >
            <h2>{props.title}</h2>

            <p>{props.message}</p>

            <button
                onClick={props.onRead}
                style={{
                    padding: "8px 15px",
                    backgroundColor: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Mark as Read
            </button>
        </div>
    );
}

/* Parent Component */

function FunctionProps() {

    function handleRead() {
        alert("Notification marked as read.");
    }

    return (
        <div
            style={{
                maxWidth: "500px",
                margin: "30px auto",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <NotificationCard
                title="Meeting Reminder"
                message="React class starts today at 6:00 PM."
                onRead={handleRead}
            />
        </div>
    );
}

export default FunctionProps;

/*
Expected Output:

Meeting Reminder

React class starts today at 6:00 PM.

[ Mark as Read ]


After Clicking Button:

Notification marked as read.
*/