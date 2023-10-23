let studenti = [
    {
        jmbag: '0303111111',
        ime: 'Ivo',
        prezime: 'Ivić',
        datum_rodenja: new Date('2000-02-01'),
        mjesto_rodenja: {
            grad: 'Pula',
            drzava: 'Hrvatska',
        },
        studiji: [
            {
                naziv: 'Informatika',
                akademska_godina: '2018./2019.',
                nastavna_godina: '1',
                predmeti: [
                    {
                        naziv_predmeta: 'Programiranje',
                        semestar: 1,
                        ocijena: 3,
                    },
                    {
                        naziv_predmeta: 'Matematika I',
                        semestar: 1,
                        ocijena: 4,
                    },
                    {
                        naziv_predmeta: 'OIKT',
                        semestar: 1,
                        ocijena: 5,
                    },
                    {
                        naziv_predmeta: 'Strukture podataka i algoritmi',
                        semestar: 2,
                        ocijena: 3,
                    },
                    {
                        naziv_predmeta: 'Baze podataka I',
                        semestar: 2,
                        ocijena: 5,
                    },
                    {
                        naziv_predmeta: 'Matematika II',
                        semestar: 2,
                        ocijena: 4,
                    },
                ],
            },
            {
                naziv: 'Informatika',
                akademska_godina: '2019./2020.',
                nastavna_godina: '2',
                predmeti: [
                    {
                        naziv_predmeta: 'Baze podataka II',
                        semestar: 3,
                        ocijena: 2,
                    },
                    {
                        naziv_predmeta: 'Računalne mreže',
                        semestar: 3,
                        ocijena: 2,
                    },

                    {
                        naziv_predmeta: 'Operacijski sustavi',
                        semestar: 3,
                        ocijena: 4,
                    },
                    {
                        naziv_predmeta: 'Napredne tehnike programiranja',
                        semestar: 4,
                        ocijena: 5,
                    },
                    {
                        naziv_predmeta: 'Sigurnost računalnih sustava',
                        semestar: 4,
                        ocijena: 4,
                    },
                    {
                        naziv_predmeta: 'Statistika',
                        semestar: 4,
                        ocijena: 5,
                    },
                ],
            },
            {
                naziv: 'Informatika',
                akademska_godina: '2020./2021.',
                nastavna_godina: '3',
                predmeti: [
                    {
                        naziv_predmeta: 'Programsko inženjerstvo',
                        semestar: 5,
                        ocijena: 2,
                    },
                    {
                        naziv_predmeta: 'Operacijska istraživanja',
                        semestar: 5,
                        ocijena: 4,
                    },

                    {
                        naziv_predmeta: 'Stručna praksa',
                        semestar: 5,
                        ocijena: 3,
                    },
                    {
                        naziv_predmeta: 'Modeliranje i simulacije',
                        semestar: 6,
                        ocijena: 2,
                    },
                    {
                        naziv_predmeta: 'Web aplikacije',
                        semestar: 6,
                        ocijena: 5,
                    },
                    {
                        naziv_predmeta: 'Završni rad',
                        semestar: 6,
                        ocijena: 4,
                    },
                ],
            },
        ],
    },
    {
        jmbag: '0303020202',
        ime: 'Tomislav',
        prezime: 'Tomić',
        datum_rodenja: new Date('1999-10-01'),
        mjesto_rodenja: {
            grad: 'Zagreb',
            drzava: 'Hrvatska',
        },
        studiji: [
            {
                naziv: 'Informatika',
                akademska_godina: '2019./2020.',
                nastavna_godina: '1',
                predmeti: [
                    {
                        naziv_predmeta: 'Programiranje',
                        semestar: 1,
                        ocijena: 5,
                    },
                    {
                        naziv_predmeta: 'Matematika I',
                        semestar: 1,
                        ocijena: 3,
                    },
                    {
                        naziv_predmeta: 'OIKT',
                        semestar: 1,
                        ocijena: 4,
                    },
                    {
                        naziv_predmeta: 'Strukture podataka i algoritmi',
                        semestar: 2,
                        ocijena: 5,
                    },
                    {
                        naziv_predmeta: 'Baze podataka I',
                        semestar: 2,
                        ocijena: 5,
                    },
                    {
                        naziv_predmeta: 'Matematika II',
                        semestar: 2,
                        ocijena: 3,
                    },
                ],
            },
            {
                naziv: 'Informatika',
                akademska_godina: '2020./2021.',
                nastavna_godina: '2',
                predmeti: [
                    {
                        naziv_predmeta: 'Baze podataka II',
                        semestar: 3,
                        ocijena: 3,
                    },
                    {
                        naziv_predmeta: 'Računalne mreže',
                        semestar: 3,
                        ocijena: 5,
                    },

                    {
                        naziv_predmeta: 'Operacijski sustavi',
                        semestar: 3,
                        ocijena: 5,
                    },
                    {
                        naziv_predmeta: 'Napredne tehnike programiranja',
                        semestar: 4,
                        ocijena: 4,
                    },
                    {
                        naziv_predmeta: 'Sigurnost računalnih sustava',
                        semestar: 4,
                        ocijena: 3,
                    },
                    {
                        naziv_predmeta: 'Statistika',
                        semestar: 4,
                        ocijena: 5,
                    },
                ],
            },
        ],
    },
    {
        jmbag: '0303001122',
        ime: 'Ana',
        prezime: 'Anić',
        datum_rodenja: new Date('2000-12-10'),
        mjesto_rodenja: {
            grad: 'Split',
            drzava: 'Hrvatska',
        },
        studiji: [
            {
                naziv: 'Informatika',
                akademska_godina: '2018./2019.',
                nastavna_godina: '1',
                predmeti: [
                    {
                        naziv_predmeta: 'Programiranje',
                        semestar: 1,
                        ocijena: 5,
                    },
                    {
                        naziv_predmeta: 'Matematika I',
                        semestar: 1,
                        ocijena: 5,
                    },
                    {
                        naziv_predmeta: 'OIKT',
                        semestar: 1,
                        ocijena: 4,
                    },
                    {
                        naziv_predmeta: 'Strukture podataka i algoritmi',
                        semestar: 2,
                        ocijena: 2,
                    },
                    {
                        naziv_predmeta: 'Baze podataka I',
                        semestar: 2,
                        ocijena: 3,
                    },
                    {
                        naziv_predmeta: 'Matematika II',
                        semestar: 2,
                        ocijena: 4,
                    },
                ],
            },
            {
                naziv: 'Informatika',
                akademska_godina: '2019./2020.',
                nastavna_godina: '2',
                predmeti: [
                    {
                        naziv_predmeta: 'Baze podataka II',
                        semestar: 3,
                        ocijena: 4,
                    },
                    {
                        naziv_predmeta: 'Računalne mreže',
                        semestar: 3,
                        ocijena: 5,
                    },

                    {
                        naziv_predmeta: 'Operacijski sustavi',
                        semestar: 3,
                        ocijena: 5,
                    },
                    {
                        naziv_predmeta: 'Napredne tehnike programiranja',
                        semestar: 4,
                        ocijena: 3,
                    },
                    {
                        naziv_predmeta: 'Sigurnost računalnih sustava',
                        semestar: 4,
                        ocijena: 5,
                    },
                    {
                        naziv_predmeta: 'Statistika',
                        semestar: 4,
                        ocijena: 5,
                    },
                ],
            },
            {
                naziv: 'Informatika',
                akademska_godina: '2020./2021.',
                nastavna_godina: '3',
                predmeti: [
                    {
                        naziv_predmeta: 'Programsko inženjerstvo',
                        semestar: 5,
                        ocijena: 3,
                    },
                    {
                        naziv_predmeta: 'Operacijska istraživanja',
                        semestar: 5,
                        ocijena: 3,
                    },

                    {
                        naziv_predmeta: 'Stručna praksa',
                        semestar: 5,
                        ocijena: 5,
                    },
                    {
                        naziv_predmeta: 'Modeliranje i simulacije',
                        semestar: 6,
                        ocijena: 4,
                    },
                    {
                        naziv_predmeta: 'Web aplikacije',
                        semestar: 6,
                        ocijena: 4,
                    },
                    {
                        naziv_predmeta: 'Završni rad',
                        semestar: 6,
                        ocijena: 4,
                    },
                ],
            },
        ],
    },
    {
        jmbag: '0303999999',
        ime: 'Lana',
        prezime: 'Lanić',
        datum_rodenja: new Date('2000-05-12'),
        mjesto_rodenja: {
            grad: 'Pula',
            drzava: 'Hrvatska',
        },
        studiji: [
            {
                naziv: 'Informatika',
                akademska_godina: '2020./2021.',
                nastavna_godina: '1',
                predmeti: [
                    {
                        naziv_predmeta: 'Programiranje',
                        semestar: 1,
                        ocijena: 5,
                    },
                    {
                        naziv_predmeta: 'Matematika I',
                        semestar: 1,
                        ocijena: 4,
                    },
                    {
                        naziv_predmeta: 'OIKT',
                        semestar: 1,
                        ocijena: 3,
                    },
                    {
                        naziv_predmeta: 'Strukture podataka i algoritmi',
                        semestar: 2,
                        ocijena: 4,
                    },
                    {
                        naziv_predmeta: 'Baze podataka I',
                        semestar: 2,
                        ocijena: 5,
                    },
                    {
                        naziv_predmeta: 'Matematika II',
                        semestar: 2,
                        ocijena: 3,
                    },
                ],
            },
        ],
    },
    {
        jmbag: '0303334455',
        ime: 'Marko',
        prezime: 'Markić',
        datum_rodenja: new Date('1999-04-11'),
        mjesto_rodenja: {
            grad: 'Pula',
            drzava: 'Hrvatska',
        },
        studiji: [
            {
                naziv: 'Informatika',
                akademska_godina: '2019./2020.',
                nastavna_godina: '1',
                predmeti: [
                    {
                        naziv_predmeta: 'Programiranje',
                        semestar: 1,
                        ocijena: 4,
                    },
                    {
                        naziv_predmeta: 'Matematika I',
                        semestar: 1,
                        ocijena: 5,
                    },
                    {
                        naziv_predmeta: 'OIKT',
                        semestar: 1,
                        ocijena: 5,
                    },
                    {
                        naziv_predmeta: 'Strukture podataka i algoritmi',
                        semestar: 2,
                        ocijena: 5,
                    },
                    {
                        naziv_predmeta: 'Baze podataka I',
                        semestar: 2,
                        ocijena: 5,
                    },
                    {
                        naziv_predmeta: 'Matematika II',
                        semestar: 2,
                        ocijena: 5,
                    },
                ],
            },
            {
                naziv: 'Informatika',
                akademska_godina: '2020./2021.',
                nastavna_godina: '2',
                predmeti: [
                    {
                        naziv_predmeta: 'Baze podataka II',
                        semestar: 3,
                        ocijena: 5,
                    },
                    {
                        naziv_predmeta: 'Računalne mreže',
                        semestar: 3,
                        ocijena: 5,
                    },

                    {
                        naziv_predmeta: 'Operacijski sustavi',
                        semestar: 3,
                        ocijena: 5,
                    },
                    {
                        naziv_predmeta: 'Napredne tehnike programiranja',
                        semestar: 4,
                        ocijena: 5,
                    },
                    {
                        naziv_predmeta: 'Sigurnost računalnih sustava',
                        semestar: 4,
                        ocijena: 2,
                    },
                    {
                        naziv_predmeta: 'Statistika',
                        semestar: 4,
                        ocijena: 4,
                    },
                ],
            },
        ],
    },
];

const f = () => {
    let semestri = {};
    for (let student of studenti) {
        if (student.ime === 'Ivo') {
            for (let studij of student.studiji) {
                for (let predmet of studij.predmeti) {
                    const semestar = predmet.semestar;
                    const kolegij = predmet.naziv_predmeta;

                    // Ako semestar 1,2,3,4,5 ili 6 nema vrijednost
                    // onda mu pridodaj objekt koji sadrzi npr. semestar: 1
                    // i prazan array predmet: []
                    if (!semestri[semestar]) {
                        semestri[semestar] = { semestar, predmet: [] };
                        // console.log(semestar); 1,2,3,4,5,6 - dinamicki se povezuju
                    }

                    // Puni prazni ključ predmet: [] sa kolegij, tj. svaki predmetom
                    // s odgovarajućim semestrom
                    // predmet: [ 'Programiranje', 'Matematika I', 'OIKT' ]
                    semestri[semestar].predmet.push(kolegij);

                    // console.log(predmet.naziv_predmeta);
                }
            }
        }
    }
    const rez = Object.values(semestri);
    console.log(rez);
};

f();
