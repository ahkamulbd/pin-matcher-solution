document.getElementById('calculator').addEventListener('click', function (event) {
    //console.log('Calculator Buttons clicked');
    const number = event.target.innerText;
    //console.log(number);
    const typedNumberField = document.getElementById('typed-number');
    const previousTypedNumber = typedNumberField.value;
    //console.log(previousTypedNumber);
    if (isNaN(number)) {
        //console.log(number);
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else {
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
});

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('generate-pin-field');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-number');
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if (currentPin === typedNumber) {
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else {
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})