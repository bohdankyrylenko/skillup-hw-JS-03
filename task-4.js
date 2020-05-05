const arr = [{
        char: "a",
        index: 12
    }, {
        char: "w",
        index: 8
    }, {
        char: "Y",
        index: 10
    }, {
        char: "p",
        index: 3
    }, {
        char: "p",
        index: 2
    },
    {
        char: "N",
        index: 6
    }, {
        char: " ",
        index: 5
    }, {
        char: "y",
        index: 4
    }, {
        char: "r",
        index: 13
    }, {
        char: "H",
        index: 0
    },
    {
        char: "e",
        index: 11
    }, {
        char: "a",
        index: 1
    }, {
        char: " ",
        index: 9
    }, {
        char: "!",
        index: 14
    }, {
        char: "e",
        index: 7
    }
]
let stringus = ""

arr.sort((a, b) => a.index - b.index);
for (let i of arr) {

    stringus += i.char

}

console.log(stringus)