function solve(number) {
    let percent = number/10;
    let percentSymbol = '%';
    let dot = '.';
    if (number === 100){
        console.log(`${number}% Complete!`);
        console.log(`[${percentSymbol.repeat(percent)}]`)
    }
    else {
        console.log(`${number}% [${percentSymbol.repeat(percent)}${dot.repeat(10-percent)}]`);
        console.log(`Still loading...`);
    }
    
}
solve(100)
