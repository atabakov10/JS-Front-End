function solve(words, sentence) {
    let arrSplit = sentence.split(' ');
    let word = words.replace(words.length, '*')
    for (let i = 0; i < arrSplit.length; i++) {
        if (arrSplit[i].length === (word.length)) {
            console.log(arrSplit[i]);
        }
    }
}
solve('great','softuni is ***** place for learning new programming languages');