const { addUser, updateUser, deleteUser, users } = require('6.js');

describe('User functions', () => {
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
});
