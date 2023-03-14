function sumTable() {
    let sum = document.getElementById('sum');
    const elements = document.querySelectorAll('td:nth-child(2):not(#sum)');
    let total = 0;
    for (const number of elements) {
        total += Number(number.textContent);
    }
    sum.textContent = total;
}