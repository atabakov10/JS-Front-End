function extractText() {
    const liElements = document.getElementById('li');
    const textArea = document.getElementById('result');
    let result = '';
   for(let index = 0; index < liElements.length; index++){
    result += liElements[index].textContent
   }
   textArea.textContent = result
}