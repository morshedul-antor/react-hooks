import { useState } from "react";
import Hook from "./EffectHooks/Hook";

export default function Hooks() {
    const [show, setShow] = useState(true);

    return (
        <div>
            <div> {show && <Hook />} </div>
            <br />
            <button
                type="button"
                onClick={() => setShow((preShow) => !preShow)}
            >
                {show ? "Hide Timer" : "Show Timer"}
            </button>
        </div>
    );
}
