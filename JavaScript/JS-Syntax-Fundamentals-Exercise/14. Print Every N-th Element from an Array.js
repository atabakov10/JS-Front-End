function getElements(array, N) {
    const result = [];
    for (let i = 0; i < array.length; i += N) {
        result.push(array[i]);
    }
    return result;
}

getElements(['5',

        '20',

        '31',

        '4',

        '20'],

    2)