import express from 'express';
import routes from './routes.js';
import moment from 'moment';

const app = express();
const port = 3000;
const staticMiddleware = express.static('public'); // direktorij sa statičkim datotekama

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

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
