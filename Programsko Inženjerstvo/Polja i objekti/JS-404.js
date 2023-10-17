let studenti = [
    {
        ime: 'Marko',
        prezime: 'Marković',
        grad: 'Pula',
    },
    {
        ime: 'Iva',
        prezime: 'Ivić',
        grad: 'Našice',
    },
    {
        ime: 'Lucija',
        prezime: 'Lucić',
        grad: 'Zagreb',
    },
    {
        ime: 'Nikola',
        prezime: 'Nikolić',
        grad: 'Rijeka',
    },
];

// function provjeri(lista, pojam) {
//     let polje = pojam.split(' ');

//     for (const student of lista) {
//         if (
//             polje
//                 .toString()
//                 .toLowerCase()
//                 .includes(student.ime.toLowerCase()) &&
//             polje
//                 .toString()
//                 .toLowerCase()
//                 .includes(student.prezime.toLowerCase()) &&
//             polje.toString().toLowerCase().includes(student.grad.toLowerCase())
//         ) {
//             return true;
//         }
//     }
//     return false;
// }

function provjeri(lista, pojam) {
    // Remove spaces and convert to lowercase
    const polje = pojam.replace(/\s/g, '').toLowerCase();

    for (let i = 0; i < lista.length; i++) {
        const student = lista[i];
        // Concatenate the student's information
        const info = (
            student.ime +
            student.prezime +
            student.grad
        ).toLowerCase();

        // Check if each character in 'polje' appears in 'info'
        let found = true;
        for (const char of polje) {
            if (!info.includes(char)) {
                found = false;
                break;
            }
        }

        if (found) {
            console.log(student.ime);
            console.log(`Index: ${i}`);
            return true;
        }
    }
    return false;
}

console.log(provjeri(studenti, 'ola rij ka'));
// console.assert(provjeri(studenti, 'ko lić ri') == 3);
