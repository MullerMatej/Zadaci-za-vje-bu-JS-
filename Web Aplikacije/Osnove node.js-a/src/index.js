import express from 'express';
import routes from './routes.js';
import moment from 'moment';

const cors = require('cors');
const app = express();
const port = 3000;
const staticMiddleware = express.static('public'); // direktorij sa statičkim datotekama
let arr = [];
const studenti = [
    {
        JMBAG: '0303111111',
        ime: 'Ivo',
        prezime: 'Ivić',
        godina_studija: 1,
    },
    {
        JMBAG: '0303131111',
        ime: 'Ana',
        prezime: 'Anić',
        godina_studija: 3,
    },
    {
        JMBAG: '0303111711',
        ime: 'Marko',
        prezime: 'Markić',
        godina_studija: 2,
    },
    {
        JMBAG: '0303114611',
        ime: 'Marija',
        prezime: 'Marić',
        godina_studija: 3,
    },
    {
        JMBAG: '0303118811',
        ime: 'Karlo',
        prezime: 'Karlić',
        godina_studija: 1,
    },
];

app.use(
    cors({
        credentials: true,
        origin: 'http://127.0.0.1:5500',
    })
);

app.use('/', staticMiddleware);

app.get('/dinamicki', (req, res) => res.send(`Dinamički odgovor`));

app.get('/', (req, res) => {
    const response = 'Prognoza se nalazi na: http://localhost:3000/prognoza' + ' a ' + 'Datum se nalazi na: http://localhost:3000/datum';

    res.json(response);
});

app.get('/datum', (req, res) => {
    let dateFormat4 = moment().format('D.MM.YYYY HH:mm');

    res.json(dateFormat4);
});

app.get('/prognoza', (req, res) => {
    let response = 'Danas će biti ';
    let vrijeme = ['sunčano', 'oblačno', 'kišovito'];

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    };

    response += vrijeme[getRandomInt(3)];

    res.json(response);
});

app.get('/dodaj', (req, res) => {
    const randomBroj = (min, max) => {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const broj = randomBroj(0, 100);

    arr.push(broj);

    res.json('Broj dodan! (ukupno: ' + arr.length + ')');
});

app.get('/dohvati', (req, res) => {
    res.json(arr);
});

app.get('/studenti', (req, res) => {
    let response = [];

    for (let student of studenti) {
        response.push(student.ime);
    }

    res.json(response);
});

app.get('/studenti/first', (req, res) => {
    res.json(studenti[0].ime);
});

app.get('/studenti/last', (req, res) => {
    let response = studenti[studenti.length - 1];

    res.json(response.ime);
});

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
