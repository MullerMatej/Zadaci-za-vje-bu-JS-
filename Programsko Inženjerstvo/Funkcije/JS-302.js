const istiZnakovi = (string) => {
    let poslj = '';
    let br = 1;
    let max = 0;

    for (const s of string) {
        if (poslj == s) {
            br = br + 1;
            if (max < br) max = br;
        } else {
            poslj = s;
            br = 1;
        }
    }
    console.log(max);
};

console.log(istiZnakovi('baaaccd')); // → 3
console.log(istiZnakovi('ba2dll')); // → 2

// Ubaci slovo u varijablu
// ako je sljedece slovo isto ko varijabla povecaj counter
// ako nije isto ko u varijabli resetiraj na 1
