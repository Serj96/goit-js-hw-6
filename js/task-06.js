const inputEl = document.querySelector('#validation-input');
const textLenght = inputEl.getAttribute('data-length');
console.log(textLenght);

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(textLenght)) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    }
    else { 
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid"); 
    }
}

