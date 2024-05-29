const sumCancat = n => {
    const first = n;
    const second = "" + n + n;
    const third = "" + n + n + n;

    console.log(first + +second + +third);
};

sumCancat(2);
