function solve(sentence) {
    let isValid = true;
    let word = []
    let sentenceSplit = sentence.split(' ');
    for (let i = 0; i < sentenceSplit.length; i++) {
    if (sentenceSplit[i].split('').includes('#')){
           word = sentenceSplit[i];
           isValid = true;
    }
    else{
        isValid = false;
    }
    if(!word.includes.Number){
      isValid == false;      
    } 
    if (isValid === true && word.length > 1) { 
        console.log(word.toString().replace('#', ''));
    }
    }}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');