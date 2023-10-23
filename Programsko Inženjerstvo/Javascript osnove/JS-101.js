const prompt = require('prompt-sync')({ sigint: true });

let a = prompt('Unesi prvi broj: ');
let b = prompt('Unesi drugi broj: ');
let c = prompt('Unesi treći broj: ');
let d = prompt('Unesi četvrti broj: ');
let maks = a;

if (maks < b) {
    maks = b;
}
if (maks < c) {
    maks = c;
}
if (maks < d) {
    maks = d;
}

console.log('Najveći između njih je: ' + maks);
