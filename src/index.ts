const sum = (a: number, b: number) => {
    if (a === 0) {
        return b;
    } else if (b === 0) {
        return a;
    } else {
        return a + b;
    }
};

const divide = (a: number, b: number) => a / b;

const printSum = (a: number, b: number) => {
    console.log(`The sum of ${a} and ${b} is ${sum(a, b)}`);
};

export {sum, divide, printSum};

// ajout tests
