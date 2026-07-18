/*
Topic   : React useState Hook
Program : Like Button
Purpose : Toggle Like and Unlike using useState.

Definition:
The useState Hook is used to store and update data.
Whenever the state changes, React automatically re-renders the UI.
*/

import { useState } from "react";

function LikeButton() {

    // State for total likes
    const [likes, setLikes] = useState(0);

    // State for like status
    const [liked, setLiked] = useState(false);

    // Handle Like / Unlike
    const handleLike = () => {

        if (!liked) {
            setLikes(likes + 1);
            setLiked(true);
        }
        else {
            setLikes(likes - 1);
            setLiked(false);
        }

    };

    return (
        <div
            style={{
                width: "320px",
                margin: "50px auto",
                padding: "25px",
                textAlign: "center",
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                fontFamily: "Arial"
            }}
        >

            <h2> Like Button</h2>

            <button
                onClick={handleLike}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "6px",
                    backgroundColor: liked ? "#dc3545" : "#007bff",
                    color: "white",
                    cursor: "pointer"
                }}
            >
                {liked ? "Unlike" : "Like"}
            </button>

            <p
                style={{
                    marginTop: "20px",
                    fontSize: "18px"
                }}
            >
                Total Likes : <strong>{likes}</strong>
            </p>

        </div>
    );

}

export default LikeButton;


/*
Expected Output


         Like Button


        [ Like ]

      Total Likes : 0

Click Like

Button      : Unlike
Total Likes : 1

Click Unlike

Button      : Like
Total Likes : 0
*/