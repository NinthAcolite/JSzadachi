let array = [
    {id: 1, name: 'apple'},
    {id: 2, name: 'watermelon'},
    {id: 3, name: 'qiwi'},
    {id: 4, name: 'lemon'}
];

let newArray = array.map(obj => Object.values(obj));

console.log(newArray);
