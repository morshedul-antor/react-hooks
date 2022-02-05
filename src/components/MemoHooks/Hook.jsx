import React, { useEffect, useMemo, useState } from "react";

export default function Hook() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(true);

    const numberDouble = useMemo(() => {
        return slowFunction(number);
    }, [number]);

    const themeStyle = useMemo(() => {
        return {
            backgroundColor: dark ? "#333" : "#CCC",
            color: dark ? "#CCC" : "#333",
            marginTop: "4px",
            padding: "20px",
        };
    }, [dark]);

    // useEffect(() => {
    //     console.log("Number Change!");
    // }, [number]);

    useEffect(() => {
        console.log("Theme Change!");
    }, [themeStyle]);

    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark((preTheme) => !preTheme)}>
                Toggle Theme
            </button>
            <div style={themeStyle}>{numberDouble}</div>
        </div>
    );
}

function slowFunction(num) {
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
}
