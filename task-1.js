const arr = [1, 2, 3, 5, 8, 9, 10];

newarr = arr.map((el) => {
    let odd = el % 2 ? true : false;
    return {
        el,
        odd,
    }
});
console.log(newarr);