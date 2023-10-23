const red = '# # # #';

for (let i = 1; i <= 8; i++) {
    if (i % 2 == 0) {
        console.log(red);
    } else {
        console.log(' ', red);
    }
}
