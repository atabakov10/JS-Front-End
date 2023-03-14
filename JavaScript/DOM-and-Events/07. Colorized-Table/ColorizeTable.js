function colorize() {
    const lines = document.querySelectorAll('tr:nth-child(even)')
    for (const line of lines) {
        line.style.backgroundColor = 'Teal';
        
    }
}