const initialize = {
    name: "bbung",
    job: "FE-Developer",
};

export function user(state = initialize, action) {
    switch (action.type) {
        case "changeUser":
            return { ...state, ...action.text };
        default:
            return state;
    }
}
