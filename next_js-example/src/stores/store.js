export const action = {
    setName: (text) => {
        return { type: "setName", text: text };
    },
};

const userInitial = {
    name: "",
    device: "",
    accessory: "",
};

export const user = (state = userInitial, action) => {
    switch (action.type) {
        case "setName":
            return { ...state, name: action.text };
        default:
            return state;
    }
};
