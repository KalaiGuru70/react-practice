/*
Topic      : useContext
Program    : Theme Provider
Purpose    : Store and share theme data.
*/

import { useState } from "react";
import ThemeContext from "./06-ThemeContext";
import Navbar from "./08-Navbar";
import Home from "./09-Home";
import Footer from "./10-Footer";

function ThemeProvider() {

    const [theme, setTheme] = useState("Dark");

    function changeTheme() {

        if (theme === "Dark") {
            setTheme("Light");
        } else {
            setTheme("Dark");
        }

    }

    return (

        <ThemeContext.Provider value={{ theme, changeTheme }}>

            <Navbar />
            <Home />
            <Footer />

        </ThemeContext.Provider>

    );

}

export default ThemeProvider;



/*
Output

Initial Output

Navbar

Theme : Dark

----------------

Home

Current Theme : Dark

[ Change Theme ]

----------------

Footer

Theme : Dark


After Clicking Button

Navbar

Theme : Light

----------------

Home

Current Theme : Light

[ Change Theme ]

----------------

Footer

Theme : Light
*/