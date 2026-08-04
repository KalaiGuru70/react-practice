/*
Topic      : React useRef
Program    : Auto Focus Input
Purpose    : Automatically focus the input box when the page loads.
*/

import { useRef, useEffect } from "react";

function AutoFocusInput() {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
           <h2>Auto Focus Input</h2>
           <input type="text" placeholder="Enter your name" ref={inputRef} />

        </div>
    );

}

export default AutoFocusInput;

/*
=========================
Output

Page Opens

Auto Focus Input

-------------------------
Enter your name

[|___________]

| = Cursor

Cursor automatically appears inside the input box.
=========================
*/