function piccolo(input) {
    let array = new Set();
    for (const lines of input) {
        let [direction, carNumber] = lines.split(', ');
        if (direction === 'IN') {
            array.add(carNumber);
        }
        else if (direction === 'OUT') {
            array.delete(carNumber)
        }
    }

    
    if (array.size === 0) {
        console.log('Parking Lot is Empty')
    }
    else {
        let arraySorter = Array.from(array).sort()
        for (const car of arraySorter) {
            console.log(car)
      }
    }
}

piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])

