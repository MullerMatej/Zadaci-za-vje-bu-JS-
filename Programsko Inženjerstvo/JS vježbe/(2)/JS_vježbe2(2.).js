const f = (tocka1, tocka2) => {
    const [x1, y1] = tocka1;
    const [x2, y2] = tocka2;

    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};

const tocke = [
    [5, 4],
    [3, 2],
];

const rez = f(tocke[0], tocke[1]);

console.log(rez); // 4
