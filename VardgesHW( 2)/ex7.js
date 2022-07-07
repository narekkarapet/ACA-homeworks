const input7 = [
    {
        name: 'John',
        age: 13
    },
    {
        name: 'Mark',
        age: 56,
    },
    {
        name: 'Rachel',
        age: 45,
    },
    {
        name: 'Nate',
        age: 67,
    },
    {
        name: 'Jeniffer',
        age: 65,
    }
];
// Output ->  [13, 67, 54];

// ??????????????????????????????????
function f(arr) {

   let arrIsAge = arr.reduce((aggr, obj) => {
       aggr.push(obj['age']);
       return aggr;
   }, []);

   const min = arrIsAge.reduce((x, y) => Math.min(x, y));
   const max = arrIsAge.reduce((x, y) => Math.max(x, y));
   const difference = max - min;
   
   const newArr = [];
   newArr.push(min, max, difference);
   
   return newArr;
}
console.log(f(input7));













