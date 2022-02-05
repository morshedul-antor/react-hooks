import React, { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { Count } from "./allContex";
import Button from "./Button/Button";

export default function Hooks() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <Count.Provider value={{ state, dispatch }}>
                <Button />
            </Count.Provider>
        </div>
    );
}
