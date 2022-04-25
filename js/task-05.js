const inputRef = document.querySelector('input#name-input');
const outputName = document.querySelector('span#name-output');

inputRef.addEventListener('input', () => {
    outputName.textContent = inputRef.value;
    if (outputName.textContent === "") {
        outputName.textContent = "Anonymous";
    }
})
