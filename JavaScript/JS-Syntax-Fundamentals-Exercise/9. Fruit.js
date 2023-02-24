function solve(typeOfFruit, numWeightGrams, numPriceKg) {
    let resultForKg = numPriceKg * (numWeightGrams / 1000);
    console.log(`I need $${resultForKg.toFixed(2)} to buy ${(numWeightGrams / 1000).toFixed(2)} kilograms ${typeOfFruit}.`)
}

solve('orange', 2500, 1.80)