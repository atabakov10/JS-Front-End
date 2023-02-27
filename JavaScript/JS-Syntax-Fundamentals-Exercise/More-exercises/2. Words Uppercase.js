function extractAndConvert(text) {
    // Split the text into words, excluding dots
    const words = text.match(/\b[\w]+\b/g);
  
    // Convert each word to uppercase
    const upperWords = words.map(word => word.toUpperCase());
  
    // Join the words with ", "
    const result = upperWords.join(', ');
  
    // Print the converted string
    console.log(result);
  }
  
  // Example usage
  extractAndConvert('This is a test string. It contains some words with dots, like e.g. "Mr. Smith".');  
  // Output: "THIS, IS, A, TEST, STRING, IT, CONTAINS, SOME, WORDS, WITH, LIKE, E, G, "MR, SMITH""
  