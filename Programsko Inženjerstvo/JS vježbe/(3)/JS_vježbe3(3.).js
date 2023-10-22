const f = (n) => {
    return n <= 1 ? n : f(n - 1) + f(n - 2);
};

const INPUT = 6;
const OUTPUT = f(INPUT); // 30

console.log(OUTPUT); // 30
