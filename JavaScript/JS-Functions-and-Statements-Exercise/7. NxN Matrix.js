function solve(number) {
    number = new Array(number).fill(new Array(number).fill(number)).forEach(number => console.log(number.join(' ')));
}
solve(5);