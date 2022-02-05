export const ACTIONS = {
    INCREMENT: "increment",
};

export const initialState = { count: 0 };

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return { count: action.payload };
        default:
            return state;
    }
};
