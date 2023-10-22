const f = (input) => {
    if (input.length !== 8) {
        return false;
    }

    let string = '';
    for (let el of input) {
        string = string + el;
    }

    console.log(parseInt(string, 2));
};

INPUT = [0, 0, 0, 0, 1, 1, 1, 0];
OUTPUT = f(INPUT); //2
