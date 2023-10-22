const f = (input) => {
    let arr2 = [];
    let rez = '';
    const arr = input.split('').map(Number);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] !== arr[i] + 1) {
            arr2.push(arr[i]);
            arr2.push(arr[i] + 1);
            if (rez === '') {
                rez = arr[i] + 1;
            }
        } else {
            arr2.push(arr[i]);
        }
    }

    console.log(rez);
};

INPUT = '12456789';
OUTPUT = f(INPUT); //4;
// INPUT = '9091929495';
// OUTPUT = f(INPUT); //93;
