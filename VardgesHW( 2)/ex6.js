const input = [ 1, -4, 12, 0, -3, 29, -150];  //   42

function f(arr) {

    return arr.reduce((aggr,elem) => {
        if (elem > 0) aggr = aggr += elem;
        return aggr;
    },0)
}


console.log(f(input));