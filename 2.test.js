const transformToArray = (array) => {
    return array.map(obj => Object.values(obj));
}

test('Проверка преобразования объектов в массив', () => {
    let array = [
        {id: 1, name: 'apple'},
        {id: 2, name: 'watermelon'},
        {id: 3, name: 'qiwi'},
        {id: 4, name: 'lemon'}
    ];
    let expected = [
        [1, "apple"],
        [2, "watermelon"],
        [3, "qiwi"],
        [4, "lemon"]
    ];
    expect(transformToArray(array)).toEqual(expected);
});
