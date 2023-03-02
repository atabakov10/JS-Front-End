function solve(numOne, numTwo, numThree) {
    let bool = true;
    if(numOne * numTwo * numThree < 0) {
        bool = false;
    }
    if(bool) {
        console.log('Positive');
    }
    else {
        console.log('Negative');
    }
}