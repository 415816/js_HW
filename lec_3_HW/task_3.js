const sumCancat = n => {
    let first = n;
    let second = "" + n + n;
    let third = "" + n + n + n;

    console.log(first + +second + +third);
};

sumCancat(2);
