# IIFE
本文简介：由于已经有很详细的资料了（见下面的译文与原文），所以本文简单的说明 IIFE 的含义、功能与使用。
### ES6 对其的影响
> 块级作用域的出现，实际上使得获得广泛应用的立即执行函数表达式（IIFE）不再必要了。 [BY阮一峰](https://github.com/ruanyf/es6tutorial/search?utf8=%E2%9C%93&q=iife)

### 什么是 IIFE
> IIFE 全称 immediately invoked function expression，即“立即调用的函数表达式”。 [译文](https://github.com/xitu/gold-miner/blob/master/TODO/disassembling-javascripts-iife-syntax.md)  [原文](https://blog.mariusschulz.com/2016/01/13/disassembling-javascripts-iife-syntax)
> 读作“iffy”。 _by《JavaScript&jQery交互式前端开发》P87_

### 功能 
1. 在解释器经过它时执行一次。
2. 因为他本质上是一个函数，所以作用域独立，可以预防变量名冲突。

### 使用 IIFE 的时机
用于任务中只需执行一次的地方，而非脚本中需在多处反复调用的情况。
如：
1. 当函数被调用时作为实参（为此函数计算出一个值）。 
2. 用于对象的属性赋值。
3. 用于处理程序和监听器，以在事件发生时执行。
4. 用于防止在两段脚本中因使用相同的变量名产生的冲突。

### 书写方式
```
//写法一
var iife = (function() {
    // ...
})();

//写法二
var iife0 = (function() {
    // ...
}());
```

### 其它参考资料
1.[从IIFE讨论表达式和语句](https://unadlib.github.io/2016/10/26/expression-and-statement/)

2.[合理使用IIFE优化JS引擎的性能](https://zhuanlan.zhihu.com/p/23629542)

3.[javascript模块化编程-详解立即执行函数表达式IIFE](http://www.jianshu.com/p/4dbf4a4c8ebb)
