const f = (arr) => {
    let rez = 0;

    const rek = (n) => {
        return Math.pow(n, 2);
    };

    for (let el of arr) {
        rez = rez + rek(el);
    }

    return rez;
};

INPUT = [1, 2, 3, 4];
console.log((OUTPUT = f(INPUT))); //25
