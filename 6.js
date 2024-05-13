let users = [
    {id:1, name:'Alex', lastname:'Wilyam', age:20},
    {id:2, name:'Steven', lastname:'King', age:34}
];

function addUser(name, lastname, age) {
    let id = users.length + 1;
    users.push({id, name, lastname, age});
}

function updateUser(id, name, lastname, age) {
    for(let i = 0; i < users.length; i++) {
        if(users[i].id === id) {
            users[i].name = name;
            users[i].lastname = lastname;
            users[i].age = age;
            break;
        }
    }
}

function deleteUser(id) {
    users = users.filter(user => user.id !== id);
}

addUser('John', 'Doe', 25); // Добавление нового пользователя
console.log(users); // Вывод: [{id:1, name:'Alex', lastname:'Wilyam', age:20}, {id:2, name:'Steven', lastname:'King', age:34}, {id:3, name:'John', lastname:'Doe', age:25}]

updateUser(1, 'Alexander', 'William', 21); // Изменение данных о пользователе с id 1
console.log(users); // Вывод: [{id:1, name:'Alexander', lastname:'William', age:21}, {id:2, name:'Steven', lastname:'King', age:34}, {id:3, name:'John', lastname:'Doe', age:25}]

deleteUser(2); // Удаление пользователя с id 2
console.log(users); // Вывод: [{id:1, name:'Alexander', lastname:'William', age:21}, {id:3, name:'John', lastname:'Doe', age:25}]
