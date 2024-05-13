const sumProperties = (obj) => {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}

test('Проверка суммы свойств объекта', () => {
    let obj = {
        price1: 100,
        price2: 150,
        price3: 200,
        price4: 100,
        price5: 150
    };
    expect(sumProperties(obj)).toBe(700);
});
