const lista = [
    {
        ime: 'Marko',
        prezime: 'Marić',
        upisan: false,
    },
    {
        ime: 'Pero',
        prezime: 'Perić',
        upisan: true,
    },
    {
        ime: 'Iva',
        prezime: 'Ivić',
        upisan: true,
    },
    {
        ime: 'Lea',
        prezime: 'Leić',
        upisan: true,
    },
    {
        ime: 'Borna',
        prezime: 'Borić',
        upisan: false,
    },
    {
        ime: 'Andrej',
        prezime: 'Andrić',
        upisan: true,
    },
    {
        ime: 'Đuro',
        prezime: 'Đurić',
        upisan: false,
    },
    {
        ime: 'Karlo',
        prezime: 'Karlić',
        upisan: true,
    },
    {
        ime: 'Janko',
        prezime: 'Jankić',
        upisan: true,
    },
    {
        ime: 'Maja',
        prezime: 'Majić',
        upisan: false,
    },
];

// for of - koristit za iteraciju kroz listu sa objektima
function provjeri(lista, pojam, status) {
    for (const student of lista) {
        if (
            (student.ime.toLowerCase().includes(pojam.toLowerCase()) ||
                student.prezime.toLowerCase().includes(pojam.toLowerCase())) &&
            student.upisan == status
        ) {
            return true;
        }

        // console.log(student.ime.toLowerCase());
        // Pretraga je neosjetljiva na velika i mala slova kada prije usporedbe ih promijeniš oba u mala

        // Pomičem ovaj dio gore
        // if (student.ime.toLowerCase().includes(pojam.toLowerCase())) {
        //     return true;
        // }
    }
    return false;
}

// Da li u listi "lista" postoji student Karlo (ili karlo ili KARLO) koji je upisan (ima status true) ? -- postoji
// Da li u listi "lista" postoji student Karlo (ili karlo ili KARLO) koji nije upisan (ima status false) ? -- ne postoji

console.log(provjeri(lista, 'Karlo', true));
