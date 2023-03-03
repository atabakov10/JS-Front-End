function factorialDivision(firstNum, secondNum) {
    return (getFactorial(firstNum) / getFactorial(secondNum)).toFixed(2);
    function getFactorial(numOne) {
        if (numOne === 1){
            return numOne;
        }
    
        return numOne * getFactorial(numOne - 1);
    }
}
console.log(factorialDivision(5, 2));
