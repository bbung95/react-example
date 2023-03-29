export const generateRandomNumber = () => {
    const pickNumbers = [];

    while (pickNumbers.length < 4) {
        const number = Math.floor(Math.random() * 10);
        if (!pickNumbers.includes(number)) {
            pickNumbers.push(number);
        }
    }

    return pickNumbers;
};
