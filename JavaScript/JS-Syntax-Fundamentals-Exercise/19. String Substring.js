function solve(searchedWord, text) {
    let words = text.split(' ');
    for (const word of words) {
        if (searchedWord.toLowerCase() === word.toLowerCase()) {
            console.log(searchedWord);
            return;
        }
    }
    console.log(`${searchedWord} not found!`);
}
solve('python', 'JavaScript is the best programming language');