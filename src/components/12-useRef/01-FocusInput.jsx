/*
Topic      : React useRef
Program    : Focus Input
Purpose    : Focus the input box when the button is clicked.
*/

import { useRef } from "react";

function FocusInput() {

    const inputRef = useRef(null);

    function handleFocus() {
        inputRef.current.focus();
    }

    return (
        <div>
            <h2>Focus Input Example</h2>

            <input type="text" placeholder="Enter your name" ref={inputRef}/>

            <br /><br />

            <button onClick={handleFocus}>
                Focus Input
            </button>

        </div>
    );

}

export default FocusInput;

/*
=========================
Output

Before Click

Focus Input Example

-------------------------
Enter your name

[____________]

[ Focus Input ]



After Click

Focus Input Example

-------------------------
Enter your name

[|___________]

[ Focus Input ]

=========================
*/