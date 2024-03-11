document.getElementById('generate-pin').addEventListener('click', function () {
    //console.log('Pin clicked');
    const displayPin = setPin();

    const displayPinField = document.getElementById('generate-pin-field');
    displayPinField.value = displayPin;
})