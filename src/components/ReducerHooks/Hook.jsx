import { useReducer } from "react";

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
};

const initialState = {
    counter: 0,
    counter2: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { ...state, counter: state.counter + action.value };
        case ACTIONS.DECREMENT:
            return { ...state, counter: state.counter - action.value };
        case "increment2":
            return { ...state, counter2: state.counter2 + action.value };
        case "decrement2":
            return { ...state, counter2: state.counter2 - action.value };
        default:
            return state;
    }
};

export default function Hook() {
    const [count, dispatch] = useReducer(reducer, initialState);

    function increment() {
        dispatch({ type: ACTIONS.INCREMENT, value: 2 });
    }
    function decrement() {
        dispatch({ type: ACTIONS.DECREMENT, value: 2 });
    }

    return (
        <div>
            <p>Count: {count.counter}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increament</button>
            <br />
            <br />
            <p>Count: {count.counter2}</p>
            <button onClick={() => dispatch({ type: "decrement2", value: 10 })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: "increment2", value: 10 })}>
                Increament
            </button>
        </div>
    );
}
