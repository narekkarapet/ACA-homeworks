let arr = [2,2,1,1,1,2,2];
// 1. length /2 === return en elemnte vori value  
// 2. {}
// 3. loop obj / ++ [key] [value]  




function f(arr) {
    let num = arr.length/2;
    let res;

    let newObj = arr.reduce((aggr, elem) => {
        aggr[elem] = (aggr[elem] || 0) +1;
        return aggr;
    }, {}); // {1: 3, 2: 4}

    for (let i in newObj) {
        if (newObj[i] >= num)  res = i;
    }
    
    return res;
}

console.log(f(arr));


















// let ws = Object.values(obj).map((el) => { // [2, 2, 1, 1, 1, 2, 2]

//      let red = el.reduce((aggr, elem) => {
//         aggr[elem] = (aggr[elem] || 0) +1;
//         return aggr;
//     }, {});
//     // console.log(red) // {1: 3, 2: 4}
    
  

//     let maxVal =  Object.values(red).reduce((aggr, num) => {
//         if (aggr < num) return num;
//         return aggr;
//     })
//     // console.log(maxKey) //  [3, 4] -> 4
   
//     let dublEntries = Object.fromEntries(
//         Object.entries(red). filter((e) => e[1] === maxVal) 
//     )
//     // console.log(res)
   
//     return dublEntries;
// })


// console.log(ws)











// let key = Object.keys(red);
//     let val = Object.values(red);
//     console.log(key, val)
//     let max = Math.max(red[i], red[i]);
    // console.log(red)
    // alert(max)
