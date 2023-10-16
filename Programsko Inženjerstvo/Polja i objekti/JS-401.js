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
function provjeri(lista, pojam) {
    for (const student of lista) {
        if (
            student.ime == pojam ||
            (student.prezime == pojam && student.upisan == true)
        ) {
            return true;
        }
    }
    return false;
}

console.log(provjeri(lista, 'Borna'));
