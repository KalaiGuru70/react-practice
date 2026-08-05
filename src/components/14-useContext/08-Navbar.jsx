/*
Topic      : useContext
Program    : Navbar
Purpose    : Display current theme.
*/

import { useContext } from "react";
import ThemeContext from "./06-ThemeContext";

function Navbar() {

    const { theme } = useContext(ThemeContext);

    return (

        <div>

            <h2>Navbar</h2>

            <h3>Theme : {theme}</h3>

        </div>

    );

}

export default Navbar;