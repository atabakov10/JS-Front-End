function meetings(arrayString) {
    let object = {};
    for (const line of arrayString) {
        let [weekDay, name] = line.split(' ');
        if (!object.hasOwnProperty(weekDay)) {
            object[weekDay] = name;
        }
    }

    for (const key in object) {
        console.log(`Scheduled for ${key}`);
    }
    for (const key in object) {
        console.log(`${key} -> ${object[key]}`);
    }
}


meetings(['Friday Bob',

    'Saturday Ted',

    'Monday Bill',

    'Monday John',

    'Wednesday George'])