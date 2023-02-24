function checkDigits(num) {
    let strNum = num.toString();
    let firstDigit = strNum[0];
    let sum = 0;
    let sameDigits = true;
  
    for (let i = 0; i < strNum.length; i++) {
      if (strNum[i] !== firstDigit) {
        sameDigits = false;
      }
      sum += parseInt(strNum[i]);
    }
  
    console.log(sameDigits);
    console.log(sum);
  }
  checkDigits(222222);