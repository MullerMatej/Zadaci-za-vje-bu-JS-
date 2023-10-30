let a1 = ['aa', 'b1', 'b1', 'ce', 'aa', 'ce', 'b1', 'z'];

let brojac = a1.reduce((rez, el) => {
    // rez[el] = 1; -> Stavlja sve elemente u objekt rez, ali su svi 1
    // return rez;
    if (rez[el]) {
        // ako ključ sa vrijednosti el već postoji, povećaj ga za 1
        rez[el]++;
    } else {
        // ako ne postoji postavi ga na 1
        rez[el] = 1;
    }
    return rez; // vrati objekt, dalje se nadodaju ključevi na objekt
}, {});

console.log(brojac); // { aa: 2, b1: 3, ce: 2, z: 1 }
