const listName = [   // 5)
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
    return arr.reduce((aggr ,obj) => {
        if (obj['age'] > 18) {
            aggr.push(`${obj['name']}: 'can go to The Matrix'`)
        } 
        else  aggr.push(`${obj['name']}: 'is under age!!'`)
        return aggr;
    },[]);
}
console.log(f(listName))