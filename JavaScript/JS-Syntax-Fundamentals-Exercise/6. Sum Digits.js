function solve(num){
    var digits = num.toString().split('')
    var realDigits = digits.map(Number)
    let sum = 0;
    for (let index = 0; index < realDigits.length; index++) {
        sum += realDigits[index]
    }
    console.log(sum);
}

solve(245678);