function subtract() {
    const firstNum = document.getElementById('firstNumber');
    let firstNumParsed = Number(firstNum.value);
    const secondNum = document.getElementById('secondNumber');
    let secondNumParsed = Number(secondNum.value);
    const result = document.getElementById('result');
    let resultParsed = firstNumParsed - secondNumParsed;
    result.textContent = resultParsed;
}