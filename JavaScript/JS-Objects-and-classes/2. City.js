function solve(object) {
    let keys = Object.keys(object);
    let values = Object.values(object);
    for (let i = 0; i < keys.length; i++) {
        console.log(`${keys[i]} -> ${values[i]}`);
    }
}

solve({

    name: "Sofia",
    
    area: 492,
    
    population: 1238438, country: "Bulgaria", postCode: "1000" })