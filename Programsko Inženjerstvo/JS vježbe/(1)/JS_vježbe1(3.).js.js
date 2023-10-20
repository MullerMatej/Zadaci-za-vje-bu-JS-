let zagrade = function (s) {
    let otvorene = [];
    let zatvorene = [];
    let rezultat = [];

    for (let zagrada of s) {
        if (zagrada == '(' || zagrada == '[' || zagrada == '{') {
            otvorene.push(zagrada);
        } else {
            zatvorene.push(zagrada);
        }
    }
    rezultat = otvorene;
    for (let x of zatvorene) {
        console.log(rezultat[rezultat.length - 1]);
        console.log(x);
        if (rezultat[rezultat.length - 1] == x) {
            rezultat.push(x);
        }
    }

    return rezultat;
};

console.log(zagrade('({})')); // → false
