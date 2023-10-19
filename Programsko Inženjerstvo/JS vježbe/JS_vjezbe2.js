const f = (string) => {
    let poslj = '';
    let arr = [];

    for (const s of string) {
        if (poslj == s) {
            arr.pop();
        } else {
            poslj = s;
            let rijec = '';
            let posljednje_slovo = '';

            for (slovo of s) {
                if (posljednje_slovo == slovo) {
                    continue;
                } else {
                    posljednje_slovo = slovo;
                    rijec = rijec + slovo;
                }
            }
            arr.push(rijec);
        }
    }
    return arr;
};

INPUT = ['banaana', 'jabuukka', 'j1agoda', '', 'greeeeeejppppp'];
OUTPUT = f(INPUT); //["banana", "jabuka", "j1agoda", ""]

console.log(OUTPUT);
