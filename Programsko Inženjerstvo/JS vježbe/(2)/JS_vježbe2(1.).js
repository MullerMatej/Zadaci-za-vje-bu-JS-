const f = (INPUT) => {
    let najkraci = INPUT[0];

    for (let el of INPUT) {
        if (najkraci.length > el.length) {
            if (el !== '') {
                najkraci = el;
            }
        }
    }

    return najkraci;
};

INPUT = ['aaa', 'bbbb', 'cc', ''];
console.log((OUTPUT = f(INPUT))); //"cc"
