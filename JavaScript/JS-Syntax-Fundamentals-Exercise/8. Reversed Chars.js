function solve(charOne, charTwo, charThree) {
    let array =[];
    let string = "";
    array.push(charOne,charTwo,charThree);
    for (let index = array.length - 1; index >= 0 ; index--) {
        string = string + ' ' + array[index]
    }
    console.log(string)
    
}

solve('A',

'B',

'C')