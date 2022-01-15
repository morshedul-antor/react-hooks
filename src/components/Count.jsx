import { useState } from "react";

export default function Count() {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState("Yellow");

    function countDecrement() {
        setCount((preCount) => preCount - 1);
        setTheme("Red");
    }

    function countIncrement() {
        setCount((preCount) => preCount + 1);
        setTheme("Green");
    }

    return (
        <div>
            <button onClick={countDecrement}> - </button>
            <span> {count} </span>
            <span> </span>
            <span> {theme} </span>
            <button onClick={countIncrement}> + </button>
        </div>
    );
}
