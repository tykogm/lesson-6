/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано три аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 * - В качестве третьего аргумента было передан не число.
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение
function reduce(arr, callback, initial) {
        if (arguments.length !== 3) {
                console.log("При вызове функции не было передано три аргумента");
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
        if (typeof initial !== "number") {
                console.log("В качестве третьего аргумента было передан не число");
                return;
        }

        let res = initial;
        for (const [index, item] of arr.entries()) {
                res = callback(res, item, index, arr);
        }
        return res;
}

const result = reduce(
    array,
    function(accumulator, item, i, arrayRef) {
        console.log(accumulator); // значение-аккумулятор
        console.log(item); // элемент массива
        console.log(i); // индекс элемента
        console.log(arrayRef); // ссылка на обрабатываемый массив

        return accumulator + item;
    },
    INITIAL_ACCUMULATOR,
);

console.log(result); // 21

exports.reduce = reduce;
