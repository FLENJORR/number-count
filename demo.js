let nameInput = document.getElementById('product-name');
let quantityInput = document.getElementById('remaining-chars');

let maxAllowedChars = nameInput.maxLength; //set max length permanently

function updateChars(event) {
    // which value is entered
    let enteredText = nameInput.value;
    let enteredTextLength = enteredText.length;

    //howw many chars we have left to enter
    let remainingChars = maxAllowedChars - enteredTextLength;
    // console.log(remainingChars);

    quantityInput.textContent = remainingChars;
}

nameInput.addEventListener('input', updateChars)