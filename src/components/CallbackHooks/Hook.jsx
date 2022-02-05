import React, { useCallback } from "react";
import { useState } from "react/cjs/react.development";
import Lists from "./Lists";

export default function Hook() {
    const [number, setNumber] = useState(1);
    const [theme, setTheme] = useState(true);

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number]);

    const themeStyle = {
        backgroundColor: theme ? "#333" : "#CCC",
        color: theme ? "#CCC" : "#333",
        marginTop: "6px",
        padding: "20px",
    };

    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setTheme((preTheme) => !preTheme)}>
                Toggle Theme
            </button>
            <div style={themeStyle}>
                <Lists getItems={getItems} />
            </div>
        </div>
    );
}
