function solve(numOne, numTwo, numThree) {
    const sum = (a, b) => a + b;
    const subtract = (mySum, num) => mySum - num;

    return subtract(sum(numOne, numTwo), numThree);
}