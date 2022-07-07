let arr = [2, 5, 100];

function doubleNumbers(arr) {
    return arr.map((num) => num += '');
}
console.log(doubleNumbers(arr))
