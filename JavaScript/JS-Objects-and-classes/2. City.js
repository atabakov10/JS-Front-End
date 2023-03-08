function solve(object) {
    let keys = Object.keys(object);
    let values = Object.values(object);
    for (let i = 0; i < keys.length; i++) {
        console.log(`${keys[i]} -> ${values[i]}`);
    }
}