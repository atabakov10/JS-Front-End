function solve(sentence) {
    let splitter = sentence.match(/[A-Z][a-z]+/g);
    console.log(splitter.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');