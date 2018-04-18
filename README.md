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