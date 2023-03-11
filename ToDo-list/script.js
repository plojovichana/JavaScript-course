let input = document.querySelector('#input');
let list = document.querySelector('#list');
let errorText = document.querySelector('#error-text');
let i = 1;

function filterText(text) {
    if(text) {
        if(text.length > 1) {
            return text;
        } else {
            errorText.innerHTML = 'Type at least one character.';
            return false;
        }
    }
    errorText.innerHTML = 'Input cannot be empty.';
    return false;
}

