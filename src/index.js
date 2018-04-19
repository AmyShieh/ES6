/**
 * Created by amyqing719@gmail.com on 12/04/2018.
 */
var a = 1;
// console.log(a);
window.onload  = function () {
    console.log(a)
}

{
    let a = '2';
}

console.log(a);

let [b,c] = [1,2];

function Amy(...args){
    console.log(args[0]);
    console.log(args[1]);
    console.log(args[2]);
}

Amy(1,2,3)

let arr1 = ['alive','amy'];
// let arr2 = arr1;
let arr2  = [...arr1];
arr2.push('shieh');
console.log(arr1);


function amyShieh(first, ...arg) {
    for(let i of arg) {
        console.log(i);
    }
    console.log(arg.length);
}
amyShieh('a','l','i','v','e');

let name = 'amy';
console.log(`hello alive${name}!`);

let decorate = 'alive';
let repDecorate = decorate.repeat(5);
console.log(decorate.includes('live')); //true
console.log(decorate.startsWith('live')); //false
console.log(decorate.endsWith('a')); //false
console.log(repDecorate);


// binary
// 二进制和八进制的表示都是以0开头，二进制是binary, 八进制是Octonary
let binary = 0b010101;
let octonary = 0o666;
console.log(binary);
console.log(octonary);
console.log(Number.isFinite(binary));
console.log(Number.isInteger(binary));
console.log(Number.isInteger(binary));
const maxNum = Number.MAX_SAFE_INTEGER;
const minNum = Number.MIN_SAFE_INTEGER;
console.log(maxNum);
console.log(minNum);