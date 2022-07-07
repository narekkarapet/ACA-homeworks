// "iloveleetcode" -> ["i","love","leetcode","apples"] -> true

let str = "iloveleetcode";
let arr = ["i","love","leetcode","apples"];

function f(arr, str) {
    
    return arr.join('').includes(str);
} 

console.log(f(arr, str))
