function solve(numOne, numTwo) {
    let result = '';
    let sum = 0;
    for (let index = numOne; index <= numTwo; index++) {
        result += index + ' ';
        sum += index;
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}
solve(5, 10)
