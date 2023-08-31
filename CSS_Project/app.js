// data file
// array of objects

let data = [
    {
        name: "brandon",
        age: "23",
    },
      {
        name: "sarah",
        age: "23",
    },
    {
        name: "john",
        age: "23",
    },
    {
        name: "tim",
        age: "23",
    },
    {
        name: "dog",
        age: "23",
    },
    {
        name: "cat",
        age: "18",
    },
    {
        name: "brandon",
        age: "23",
    },
      {
        name: "sarah",
        age: "23",
    },
    {
        name: "john",
        age: "23",
    },
    {
        name: "tim",
        age: "23",
    },
    {
        name: "dog",
        age: "23",
    },
    {
        name: "cat",
        age: "18",
    },
];

const info = document.querySelector("#info")

let details = data.map(function(item){
    return '<div>' + item.name + ' ' + ' is ' + item.age  + ' years old'+  '</div>';
});

info.innerHTML = details.join('\n')