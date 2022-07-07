const input8 = [               //          {
    ['a', 'b', 'c'],           //     a: 1,
    ['c', 'd', 'f'],           //     b: 1,
    ['d', 'f', 'g'],           //     c: 2,
    ['d', 'f', 'g'],           //     d: 2,
    ['d', 'f', 'g'],           //     f: 2,
    ['a', 'b', 'c'],           //     g: 1,
    ['a', 'b', 'c'],           // }

];


function f(arr) {

    return arr.reduce((aggr, elem) => { 
        let count = 1;

        for (let i = 0; i < elem.length; i++) {
            let key = elem[i];
            if (aggr[key]) count++;
            aggr[key] = count;
        }

        return aggr;
    }, {})
}

console.log(f(input8))


