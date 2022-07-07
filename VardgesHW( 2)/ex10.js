// 10) gtnel trvats array i miji 3rd amenashate krknvox tive;

const arr = [1, 2, 2, 2, 2, 1, 3,  4];

function f(arr) {

    let newObj = arr.reduce((aggr, elem) => {
        aggr[elem] = (aggr[elem] || 0) +1;
        return aggr;
    }, {}); // {1: 2, 2: 2, 3: 3, 4: 1}
    console.log(newObj);

    let values = Object.values(newObj);
    let sort = values.sort((a, b) => a-b);
    let res = sort[2];
    let end;
    for (let key in newObj) {
        if (newObj[key] === res) end = key;
    }
    console.log(sort);
    return end;
}

console.log(f(arr))