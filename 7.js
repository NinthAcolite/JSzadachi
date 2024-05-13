// Предположим, что у вас есть массив products
let products = [
    {id: 1, title: 'велосипед', price: 45000, count: 3, marks: [5, 5, 5]},
    {id: 2, title: 'автомобиль', price: 800, count: 15, marks: [4, 4, 4, 4]},
    // Другие продукты...
];

// Отфильтруйте товары по условию, если их количество будет больше 10
let filteredProducts = products.filter(product => product.count > 10);

// Найдите значение элемента массива (товара), чья цена находится в диапазоне от 800 до 900 включительно
let foundProduct = products.find(product => product.price >= 800 && product.price <= 900);

// Отсортируйте данные товаров по цене (по убыванию)
let sortedProducts = products.sort((a, b) => b.price - a.price);

// Посчитайте итоговую стоимость всех товаров в массиве
let totalCost = products.reduce((sum, product) => sum + product.price * product.count, 0);

// Преобразуйте массив таким образом, чтобы изменить сво-во marks и получить итоговую сумму оценок
let transformedProducts = products.map(product => ({
    ...product,
    marks_total: product.marks.reduce((sum, mark) => sum + mark, 0)
}));

// Итоговый результат отсортируйте по marks_total
let sortedByMarksTotal = transformedProducts.sort((a, b) => b.marks_total - a.marks_total);
