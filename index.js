const array = [1, 2, 3, 4, 5, 8, 8, 1, 1, 3, 4, 7];

console.log(
    array.reduce((accum, item) => {
        if (accum.find(accum_item => accum_item === item)) {
            return accum;
        }
        return [...accum, item];
    }, [])
);
