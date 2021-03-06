# ES6
es6

####es6的编译（在不适用webpack以及gulp等相关工具的条件下）

    1）全局安装babel-cli
    2）本地安装babel-preset-es2015和babel-cli
    3) 添加.babelrc文件
        该文件为一个对象，对象所含内容有
        presets:["2015"],
        plugins: [],
    4) 编译指令： babel ***(要编译的js) -o ***（编译完成的目标js）
    

####ES6中的声明方式：
    var: 变量
    let: 局部声明
    const: 常量
    
####变量的解构赋值

#####数组的结构赋值
    数组根据索引位置（顺序）结构。
    要求左右结构必须一样，否则会报错。
    undefined 和 null是不一样的
    undefined: 没有值，空的
    null: 有值，但取值为null
    
```
    let [a,b,c] = [0,1,2];
    let [foo = 'true'] = []
```

#####对象的结构赋值
    对象是根据变量名来结构的
```
let {foo, bar} = {foo:'alive', bar:'amy'}
```

    如果已经定义了一个变量，无论是用let还是var,那么赋值的时候，需要加（）,否则编译会不通过
    
```
    let foo;
    ({foo} = {foo: 'alive'});
```

#####字符串的结构赋值

```
    const [a,b,c] = 'amy';
    console.log(a);
    console.log(b);
    console.log(c);
```

####对象扩展运算符

```
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
```


####rest扩展运算符

```
function amyShieh(first, ...arg) {
    for(let i of arg) {
        console.log(i);
    }
    console.log(arg.length);
}
amyShieh('a','l','i','v','e');
```

    rest运算符和对象扩展运算符都是三个点（...）。具体区别看例子。rest就是除去已知的固定参数，剩余的就是rest的。
    
####字符串模板
```
    
let name = 'amy';
console.log(`hello alive${name}!`);

let decorate = 'alive';
let repDecorate = decorate.repeat(5);
console.log(decorate.includes('live')); //true
console.log(decorate.startsWith('live')); //false
console.log(decorate.endsWith('a')); //false
console.log(repDecorate);
```

####数值类型
```
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
```

####数组知识
1.  Array.from
2.  Array.of
3.  arr.find
4.  arr.fill
5.  for of
6.  enteries

```
    
let obj = {
    '0': 'alive',
    '1': 'amy',
    '2': 'amyShieh',
    length: 3
}

let objToArr = Array.from(obj);
console.log(objToArr);
let arrOf = Array.of('alive','amy');
console.log(arrOf);

let arrFind = objToArr.find(function (value,index,arr) {
    console.log(value);
    console.log(index);
    return value == 'alive'
});

let arrFill = objToArr.concat([]).fill('brave',0,1);
console.log(arrFill);
console.log(objToArr);

for(let value of arrFill) {
    console.log(value);
}


for(let index of arrFill.keys()) {
    console.log(index);
}

for(let item of arrFill.entries()) {
    console.log(item);
}

for(let [index,value] of arrFill.entries()) {
    console.log(index+': '+ value);
}

const objParse = {
    a: 'amy',
    b: 'alive'
};
function consoleObj({a,b=1}) {
    console.log(a,b);
}

consoleObj(objParse);

console.log('a' in objParse);
console.log('c' in objParse);

const emptyArr = [0,,,];
console.log(emptyArr.length);
console.log(0 in emptyArr);

const arrForEach = ['alive','amy','shieh'];
arrForEach.forEach((val,index) => console.log(val,index))
arrForEach.filter((val,index) => console.log(val,index))
arrForEach.some((val,index) => console.log(val,index))
arrForEach.map((val,index) => console.log(val,index))
console.log(arrForEach.map((val,index) => 'test'));
```

####箭头函数

箭头函数没啥总结的，注意一点就是箭头函数里面不能有new,就是说 不能有构造函数。

###key值的构建

```
    console.log('key值得构建');
    
    let key = 'name';
    let keyObj = {
        [key]: 'amy'
    }
    console.log(keyObj);
    
    console.log('对比两个对象是否相等');
    console.log('===同值相等， is严格相等');
    
    let eqObj1 = {name:'amy'}
    let eqObj2 = {name:'amy'}
    console.log(Object.is(eqObj1,eqObj2));
    console.log(Object.is(eqObj1.name,eqObj2.name));
    
    console.log('-------Symbol------');
    
    let symbolObj = {
        name: 'amy',
        skill: 'handMade'
    }
    let age = Symbol();
    symbolObj[age] = 23;
    
    console.log(symbolObj);
    
    for (let item in symbolObj) {
        console.log(item);
    }
```