import {sumToString, getIncreasingArray, maxAndMin, countArray} from "./mild_1.js";
import {identifyVariable, identifyArray, removeKey, removeKeyNonDestructive, removeKeys} from "./mild_2.js";

/* console.log(sumToString(3, 4));
console.log(getIncreasingArray(3, 7));
console.log(maxAndMin([2, 5, 6, 1, 7]));
console.log(countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]]));
*/

console.log(identifyVariable(4));
console.log(identifyArray(['some', 3, [3, 4], false]));
let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
console.log(removeKey(obj, 'password'));
console.log(obj);