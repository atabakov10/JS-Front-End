function replaceWordWithTemplate(words, template) {
    // Split the words into an array
    const wordsArray = words.split(', ');

    // Find the position of the * in the template
    const index = template.indexOf('*');

    let arrTemplateWords = template.split(' ');

    // Loop through the words array and replace the word with the same length as the * in the template
    for (let i = 0; i < arrTemplateWords.count; i++) {
        if (wordsArray[i].length === index) {
            template = template.replace('*', wordsArray[i]);
            break;
        }
    }

    // Join the words array back into a string and return it
    console.log(template);
}
replaceWordWithTemplate('great','softuni is ***** place for learning new programming languages');