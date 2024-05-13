const { addUser, updateUser, deleteUser, generateArray, users } = require('7.js');

describe('User and product functions', () => {
    beforeEach(() => {
        users.length = 0;
        users.push({id:1, name:'Alex', lastname:'Wilyam', age:20});
        users.push({id:2, name:'Steven', lastname:'King', age:34});
    });

    it('должна добавлять пользователя', () => {
        addUser('John', 'Doe', 25);
        expect(users).toEqual([
            {id:1, name:'Alex', lastname:'Wilyam', age:20},
            {id:2, name:'Steven', lastname:'King', age:34},
            {id:3, name:'John', lastname:'Doe', age:25}
        ]);
    });

    it('должна обновлять пользователя', () => {
        updateUser(1, 'Alexander', 'William', 21);
        expect(users).toEqual([
            {id:1, name:'Alexander', lastname:'William', age:21},
            {id:2, name:'Steven', lastname:'King', age:34}
        ]);
    });

    it('должна удалять пользователя', () => {
        deleteUser(2);
        expect(users).toEqual([
            {id:1, name:'Alex', lastname:'Wilyam', age:20}
        ]);
    });

    it('должна преобразовывать и сортировать продукты', () => {
        let products = [
            {id: 1, title: 'велосипед', price: 45000, count: 3, marks: [5, 5, 5]},
            {id: 2, title: 'автомобиль', price: 800, count: 15, marks: [4, 4, 4, 4]},
            // Другие продукты...
        ];
        let expectedProducts = [
            {id: 1, title: 'велосипед', price: 45000, count: 3, marks_total: 15},
            {id: 2, title: 'автомобиль', price: 800, count: 15, marks_total: 12},
            // Другие продукты...
        ];
        expect(generateArray(products)).toEqual(expectedProducts);
    });
});
