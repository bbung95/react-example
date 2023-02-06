export const fetchUser = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ name: "zerobase" }), 2000);
    });
};

export const fetchDeviceList = async () => {
    return new Promise((resolve) => {
        setTimeout(
            () =>
                resolve([
                    { id: 1, name: "device", title: "Imac" },
                    { id: 2, name: "device", title: "Macbook" },
                ]),
            500
        );
    });
};

export const fetchAccessoryList = async () => {
    return new Promise((resolve) => {
        setTimeout(
            () =>
                resolve([
                    { id: 1, name: "accesory", title: "모니터" },
                    { id: 2, name: "accesory", title: "키보드" },
                ]),
            500
        );
    });
};
