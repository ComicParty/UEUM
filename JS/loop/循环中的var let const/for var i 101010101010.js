var funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(
    function() { //这里有一个问题，funtion函数表达式直接在这里运行了，单独提出来，就是一个错误的语法，它没有函数名。
      console.log(i);
    }
  );
}

funcs.forEach(
  function(func) {
    func();
  }
);

//大本P21 var统一使用循环结束时的变量值，所以 log出来都是10？