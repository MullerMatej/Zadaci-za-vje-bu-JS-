let studenti = [
    { oib: '12312349172', ime: 'Hrvoje', prezime: 'Horvat' },
    { oib: '82723412342', ime: 'Ivana', prezime: 'Ivić' },
    { oib: '97283742342', ime: 'Stjepan', prezime: 'Stjepanović' },
];

const ukupnoSlova = studenti.reduce((sum, student) => {
    return sum + student.ime.length;
}, 0);

console.log(ukupnoSlova);
