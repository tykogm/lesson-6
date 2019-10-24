/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 3];

// Решение
function forEach(arr, callback) {
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

    for (const [index, item] of arr.entries()) {
        callback(item, index, arr);
    }
}

const result = forEach(array, function(item, index, arrayRef) {
    console.log(item); // элемент массива
    console.log(index); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив
});

console.log(result); // undefined

exports.forEach = forEach;
