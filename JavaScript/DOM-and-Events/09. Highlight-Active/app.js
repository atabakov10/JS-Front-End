function focused() {
    const inputs = Array.from(document.getElementsByTagName('input'));

    for (const input of inputs) {
        input.addEventListener('focus', focusHandler);
        input.addEventListener('blur', blurHandler);
    }

    function focusHandler(event) {
        const currentInput = event.target;
        const parentDiv = currentInput.parentNode;
        parentDiv.classList.add('focused');
    }

    function blurHandler(event) {
        const currentInput = event.target;
        const parentDiv = currentInput.parentNode;
        parentDiv.classList.remove('focused');
    }
}
