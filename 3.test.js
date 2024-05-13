const { logString } = require('3.js');

describe('logString', () => {
    it('должна выводить строку правильно', () => {
        console.log = jest.fn();

        logString("Hello", "my", "world!");

        expect(console.log).toHaveBeenCalledWith("Hello my world!");
    });
});
