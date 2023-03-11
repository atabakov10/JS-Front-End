function oddOccurencies(string) {
  let arrayWords = [];  
  let object = {};
  let stringToLower = string.toLowerCase();
  let array = stringToLower.split(" ");
  for (const word of array) {
    if (object.hasOwnProperty(word)) {
      object[word]++;
    } else {
      object[word] = 1;
    }
  }
  for (const word in object) {
    if (object[word] % 2 === 1) {
        arrayWords.push(word);
    }
  }  
  console.log(arrayWords.join(" "));
}

oddOccurencies("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
