const { generateArray } = require('5.js');

describe('generateArray', () => {
    it('должна преобразовывать объекты в массивы', () => {
        let array = [[1], {id: 40}, [100], [300], {part: 10}];
        let expectedArray = [[1], [40], [100], [300], [10]];

        expect(generateArray(array)).toEqual(expectedArray);
    });
});
