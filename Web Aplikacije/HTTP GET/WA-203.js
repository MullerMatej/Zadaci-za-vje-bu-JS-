let studenti = [
    { oib: '12312349172', ime: 'Hrvoje', prezime: 'Horvat' },
    { oib: '82723412342', ime: 'Ivana', prezime: 'Ivić' },
    { oib: '97283742342', ime: 'Stjepan', prezime: 'Stjepanović' },
];
let rezultat = studenti.map((el) => {
    return `${el.ime} ${el.prezime} (${el.oib})`;
});
console.log(rezultat);
// ["Hrvoje Horvat (12312349172)", "Ivana Ivić (82723412342)", "Stjepan Stjepanović (97283742342)"]
