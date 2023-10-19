INPUT = {
    prvi: 122,
    drugi: 18,
    treci: 'NotAnInteger',
    cetvrti: -2,
    peti: 322,
    sesti: 32.0,
};

const f = (INPUT) => {
    let suma = 0;
    for (let kljuc in INPUT) {
        value = INPUT[kljuc];
        let tip = typeof value;
        if (tip === 'number' && Number.isInteger(value) === true) {
            suma = suma + value;
        }
    }
    console.log(suma);
};

OUTPUT = f(INPUT); //492
