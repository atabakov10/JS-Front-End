function showText() {
    const readMoreText = document.getElementById('more');
    readMoreText.style.display = 'none';
    const newReadMoreText = document.getElementById('text');
    newReadMoreText.style.display = 'inline';

    readMoreText.textContent = newReadMoreText.textContent
}