/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение
function filter(arr, callback) {
    if (arguments.length !== 2) {
        console.log("При вызове функции не было передано два аргумента");
        return;
    }
    if (!Array.isArray(arr)) {
        console.log("В качестве первого аргумента был передан не массив");
        return;
    }
    if (typeof callback !== "function") {
        console.log("В качестве второго аргумента была передана не функция");
        return;
    }

    const newArr = [];
    for (const [index, item] of arr.entries()) {
        if (callback(item, index, arr)) {
            newArr.push(item);
        }
    }
    return newArr;
}

const filteredArray = filter(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return item === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;
