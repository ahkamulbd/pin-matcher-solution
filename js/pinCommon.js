//console.log('pin js file added');

function setPin() {
    const pin = generatePin();
    const pinString = pin + '';
    const pinStringLength = pinString.length;
    if (pinStringLength === 4) {
        return pin;
    }
    return setPin();
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);

    return random;
}