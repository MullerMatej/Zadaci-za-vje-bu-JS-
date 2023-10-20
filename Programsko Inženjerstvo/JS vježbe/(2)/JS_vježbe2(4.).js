const f = (INPUT) => {
    let polje = INPUT[0];
    let n = INPUT[1];

    let sort = [];
    let rep = [];

    for (let el of polje) {
        if (sort.includes(el) !== true) {
            sort.push(el);
        } else {
            rep.push(el);
        }
    }

    let last;
    let rez = [];

    for (let i = 0; i < rep.length; i++) {
        if (last !== rep[i]) {
            count = rep.filter((x) => x == rep[i]).length;
            // console.log('Vrijednost ' + rep[i] + ': ' + (count + 1));
            if (count + 1 >= n) {
                rez.push(rep[i]);
            }
            last = rep[i];
        }
    }

    console.log(rez);
};

INPUT = [[1, 2, 1, 3, 'a', 1, 4, 1, 5, 'a', 'a', 'b', 'c'], 2];
// INPUT = [
//     [1, 2, 1, 3, 'a', 1, 4, 1, 5, 'a', 'a', 'b', 'c', 7, 7, 7, 's', 's', 's'],
//     3,
// ];
OUTPUT = f(INPUT); //[1, a]
