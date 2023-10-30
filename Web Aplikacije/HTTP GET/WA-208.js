let lista = [
    {
        id: 10001,
        createdBy: 'nikola@tankovic.me',
    },
    {
        id: 10002,
        createdBy: 'marko@markovic.me',
    },
    {
        id: 10003,
        createdBy: 'iva@ivkovic.me',
    },
];

const najveciId = lista.reduce((najveci, oznaka) => {
    if (najveci < oznaka.id) return oznaka.id;
    else return najveci;
}, 0);

console.log(najveciId);
