function calculator(num, operator, value) {
    let result = 0;
    if (operator === '+') {
        result = num + value;
    }
    else if (operator === '-') {
        result = num - value;
    }
    else if (operator === '*') {
        result = num * value;
    }
    else if (operator === '/') {
        result = num / value;
    }
    return result.toFixed(2);
}