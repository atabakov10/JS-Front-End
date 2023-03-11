function wordsTracker(input) {
    let object = {};
    let wordsToFind = input.shift().split(' ');
    for (const word of wordsToFind) {
        object[word] = 0;
    }
    for (const word of input) {
        if (object.hasOwnProperty(word)){
            object[word]++;
        }
        
    }
    let array = Object.entries(object);
    let sortedArray = array.sort((a, b) => b[1] - a[1]);
    for (const word of sortedArray) {
        console.log(`${word[0]} - ${word[1]}`);
    }
}

wordsTracker([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence'])