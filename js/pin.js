//console.log('pin js file added');

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}