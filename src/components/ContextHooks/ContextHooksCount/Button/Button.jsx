import React, { useContext } from "react";
import { Count } from "../allContex";
import { ACTIONS } from "../reducer";

export default function Button() {
    const { state, dispatch } = useContext(Count);
    return (
        <div>
            <div>{state.count}</div>
            <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: "decrement" })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
                Reset
            </button>
        </div>
    );
}
