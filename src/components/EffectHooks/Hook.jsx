import { useEffect, useState } from "react";

export default function Hook() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const addClick = () => {
        setCount((preCount) => preCount + 1);
    };

    useEffect(() => {
        console.log("Updating Title");
        document.title = `Clicked ${count} times`;
    }, [count]);

    const tick = () => {
        console.log("Ticking");
        setDate(new Date());
    };

    useEffect(() => {
        console.log("Use Timer");
        const interval = setInterval(tick, 1000);

        return () => {
            console.log("Unmount");
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <p>Time : {date.toLocaleTimeString()}</p>
            <button type="button" onClick={addClick}>
                Click
            </button>
        </div>
    );
}
