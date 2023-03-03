function smallestNum(numOne, numTwo, numThree) {
    if (numOne < numTwo && numOne < numThree) {
        return numOne;
    } else if (numTwo < numOne && numTwo < numThree) {
        return numTwo;
    } else {
        return numThree;
    }
    
}