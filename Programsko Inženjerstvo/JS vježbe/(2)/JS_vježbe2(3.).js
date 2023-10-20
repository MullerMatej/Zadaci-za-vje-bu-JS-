const f = (polje) => {
    let provjera = [];

    for (let el of polje) {
        if (provjera.includes(el) !== true) {
            provjera.push(el);
        }
    }

    console.log(provjera);
};

INPUT = [1, 2, 1, 3, 1, 4, 1, 5, 'a', 'a', 'b', 'c'];
OUTPUT = f(INPUT); //[1, 2, 3, 4, 5, "a", "b", "c"]
