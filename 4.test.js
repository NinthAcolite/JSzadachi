const { checkObj } = require('4.js');

describe('checkObj', () => {
    it('должна проверять наличие ключа particle', () => {
        const obj1 = {id: 1, particle: 10};
        const obj2 = {id: 2, name: "tag"};

        expect(checkObj(obj1)).toBe(true);
        expect(checkObj(obj2)).toBe(false);
    });
});
