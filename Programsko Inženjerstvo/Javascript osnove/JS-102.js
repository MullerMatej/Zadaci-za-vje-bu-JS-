const prompt = require('prompt-sync')({ sigint: true });

let bodovi = prompt('Unesi broj bodova: ');
let ocjena;
let poruka;
// tvoj kod

if (bodovi < 50) {
    ocjena = 1;
} else if (bodovi < 70 && bodovi >= 50) {
    ocjena = 2;
} else if (bodovi >= 70 && bodovi < 80) {
    ocjena = 3;
} else if (bodovi >= 80 && bodovi < 90) {
    ocjena = 4;
} else {
    ocjena = 5;
    poruka = 'Čestitam!';
}

console.log(ocjena, poruka || '');
