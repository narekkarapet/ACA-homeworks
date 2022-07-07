const listName = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

function f(arr) {
    return arr.reduce((aggr ,el) => {
        aggr.push(el['name']);
        return aggr
    }, []);
}
console.log(f(listName));