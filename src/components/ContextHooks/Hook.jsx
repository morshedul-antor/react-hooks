import React, { useState } from "react";
import FunctionalTheme from "./FunctionalTheme";
import { ThemeContex } from "./Contex";

export default function Hook() {
    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme((preDarkTheme) => !preDarkTheme);
    }

    const buttonStyles = {
        backgroundColor: "#333",
        color: "#FFF",
        padding: "10px 50px",
        borderRadius: "4px",
        border: "none",
        display: "block",
        margin: "0 auto",
        fontSize: "1rem",
        cursor: "pointer",
    };

    return (
        <div>
            <ThemeContex.Provider value={darkTheme}>
                <FunctionalTheme />
                <button style={buttonStyles} onClick={toggleTheme}>
                    Toggle
                </button>
            </ThemeContex.Provider>
        </div>
    );
}
