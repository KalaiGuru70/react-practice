/*
Topic      : useContext
Program    : Footer
Purpose    : Display current theme.
*/

import { useContext } from "react";
import ThemeContext from "./06-ThemeContext";

function Footer() {

    const { theme } = useContext(ThemeContext);

    return (

        <div>

            <h2>Footer</h2>

            <h3>Theme : {theme}</h3>

        </div>

    );

}

export default Footer;