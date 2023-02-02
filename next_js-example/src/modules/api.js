export const fetchUser = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ name: "zerobase" }), 2000);
    });
};
