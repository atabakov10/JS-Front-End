function solve(numOne, numTwo, numThree) {
    let largestNum;
    if (numOne > numTwo && numOne > numThree){
        largestNum = numOne;
    }
    else if (numTwo > numOne && numTwo > numThree){
        largestNum = numTwo;
    }
    else {
        largestNum = numThree;
    }

    console.log(`The largest number is ${largestNum}.`);
}

solve(5, -3, 15);