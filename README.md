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
    
