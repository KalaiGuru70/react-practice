/*
Topic      : useContext
Program    : Theme Changer
Purpose    : Change theme using Context.
*/

import { useContext } from "react";
import ThemeContext from "./06-ThemeContext";

function Home() {

    const { theme, changeTheme } = useContext(ThemeContext);

    return (

        <div>

            <h2>Home</h2>

            <h3>Current Theme : {theme}</h3>

            <button onClick={changeTheme}>
                Change Theme
            </button>

        </div>

    );

}

export default Home;