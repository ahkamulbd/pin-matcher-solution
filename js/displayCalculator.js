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
})