function solve(num, numTwo, operator) {
    let result;
    if (operator == '+'){
        result = num + numTwo;
    }
    else if (operator == '-'){
        result = num - numTwo;
    }
    else if (operator == '*'){
        result = num * numTwo;
    }
    else if (operator == '/'){
        result = num / numTwo;
    }
    else if (operator == '%'){
        result = num % numTwo;
    }
    else {
        result = num**numTwo;
    }
    console.log(result);
}

solve(5, 6, '**')