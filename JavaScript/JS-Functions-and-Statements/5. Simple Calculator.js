function solve(numOne, numTwo, operation) {
    switch (operation) {
        case 'multiply':
            return numOne * numTwo;
            break;
        case'subtract':
        return numOne - numTwo;
         break;
         case 'add':
            return numOne + numTwo;
            break;
            case 'divide':
                return numOne / numTwo;
                break;
    }
}