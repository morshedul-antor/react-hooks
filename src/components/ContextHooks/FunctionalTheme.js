import React, { useContext } from "react";
import { ThemeContex } from "./Contex";

export default function FunctionalTheme() {
    const darkTheme = useContext(ThemeContex);

    const styles = {
        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        padding: "2rem",
        margin: "2rem",
        textAlign: "center",
        fontSize: "2rem",
        borderRadius: "2px",
    };

    return (
        <div>
            <div style={styles}>Functional Theme</div>
        </div>
    );
}
