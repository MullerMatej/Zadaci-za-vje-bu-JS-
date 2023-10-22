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

const calculateAverageGrade = (student) => {
    const averageGrades = {};

    for (const studij of student.studiji) {
        const year = studij.nastavna_godina;
        let totalGrade = 0;
        let totalSubjects = 0;

        for (const predmet of studij.predmeti) {
            totalGrade += predmet.ocijena;
            totalSubjects++;
        }

        averageGrades[year] = totalGrade / totalSubjects;
    }

    return averageGrades;
};

const pronadiStudenta = (studenti, ime) => {
    for (const student of studenti) {
        if (student.ime === ime) {
            return student;
        }
    }
    return null;
};

const studentIme = 'Ivo';

const ivoStudent = pronadiStudenta(studenti, studentIme);
if (ivoStudent) {
    const prosjekGodina = calculateAverageGrade(ivoStudent);

    console.log(`Prosjek ocjena za studenta ${studentIme}:`);
    for (const godina in prosjekGodina) {
        console.log(`Godina ${godina}: ${prosjekGodina[godina]}`);
    }
} else {
    console.log(`Student ${studentIme} nije pronađen.`);
}

// Pocenti kod ----------------------
// const f = (input) => {
//     for (let student of input) {
//         // console.log('ime: ', student.ime, ', godine_studija: ', student.studiji.length);
//         if (student.ime === 'Ivo') {
//             let sum = 0;
//             let sum2 = 0;
//             let sum3 = 0;
//             let broj_ocijena = 0;
//             let broj_ocijena2 = 0;
//             let broj_ocijena3 = 0;
//             for (let studij of student.studiji) {
//                 // console.log(studij);
//                 for (let predmet of studij.predmeti) {
//                     if (studij.nastavna_godina == 1) {
//                         sum = sum + predmet.ocijena;
//                         broj_ocijena++;
//                     }
//                     if (studij.nastavna_godina == 2) {
//                         sum2 = sum2 + predmet.ocijena;
//                         broj_ocijena2++;
//                     }
//                     if (studij.nastavna_godina == 3) {
//                         sum3 = sum3 + predmet.ocijena;
//                         broj_ocijena3++;
//                     }
//                 }
//             }
//             console.log(sum / broj_ocijena);
//             console.log(sum2 / broj_ocijena2);
//             console.log(sum3 / broj_ocijena3);
//             // console.log(student.ime);
//         }
//     }
// };

// f(studenti);
