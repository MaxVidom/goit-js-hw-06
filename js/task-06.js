const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', () => {
    if (inputRef.value.length === 6) {
        inputRef.classList = 'valid';
        return;
    }
    inputRef.classList = 'invalid';
})