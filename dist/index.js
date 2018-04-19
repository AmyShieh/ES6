'use strict';

/**
 * Created by amyqing719@gmail.com on 12/04/2018.
 */
var a = 1;
// console.log(a);
window.onload = function () {
    console.log(a);
};

{
    var _a = '2';
}

console.log(a);

var b = 1,
    c = 2;


function Amy() {
    console.log(arguments.length <= 0 ? undefined : arguments[0]);
    console.log(arguments.length <= 1 ? undefined : arguments[1]);
    console.log(arguments.length <= 2 ? undefined : arguments[2]);
}

Amy(1, 2, 3);

var arr1 = ['alive', 'amy'];
// let arr2 = arr1;
var arr2 = [].concat(arr1);
arr2.push('shieh');
console.log(arr1);

function amyShieh(first) {
    for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        arg[_key - 1] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            console.log(i);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    console.log(arg.length);
}
amyShieh('a', 'l', 'i', 'v', 'e');

var name = 'amy';
console.log('hello alive' + name + '!');

var decorate = 'alive';
var repDecorate = decorate.repeat(5);
console.log(decorate.includes('live')); //true
console.log(decorate.startsWith('live')); //false
console.log(decorate.endsWith('a')); //false
console.log(repDecorate);

// binary
// 二进制和八进制的表示都是以0开头，二进制是binary, 八进制是Octonary
var binary = 21;
var octonary = 438;
console.log(binary);
console.log(octonary);
console.log(Number.isFinite(binary));
console.log(Number.isInteger(binary));
console.log(Number.isInteger(binary));
var maxNum = Number.MAX_SAFE_INTEGER;
var minNum = Number.MIN_SAFE_INTEGER;
console.log(maxNum);
console.log(minNum);
