function generateArray(array) {
    for(let i = 0; i < array.length; i++) {
        if(!Array.isArray(array[i]) && typeof array[i] === 'object') {
            array[i] = Object.values(array[i]);
        }
    }
    return array;
}
let array = [[1], {id: 40}, [100], [300], {part: 10}];
console.log(generateArray(array)); // Вывод: [[1], [40], [100], [300], [10]]