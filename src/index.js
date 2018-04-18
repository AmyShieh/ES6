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