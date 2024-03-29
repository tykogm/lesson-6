/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 3, 4, 5, 6];

// Решение
function every(arr, callback) {
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

    let res = true;
    for (const [index, item] of arr.entries()) {
        res &= callback(item, index, arr);
    }
    return Boolean(res);
}

const result = every(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return typeof item === 'number';
});

console.log(result); // true

exports.every = every;
