const f = (n) => {
    let arr = [];
    let brojac = 1;

    for (let i = 1; i !== n; i++) {
        arr.push(i);
    }

    console.log(arr);
};

INPUT = 12;
OUTPUT = f(INPUT); //[3,4,5]

// Iz polja spremi one brojeve koji skupa daju 12
