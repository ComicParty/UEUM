var funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(
    (function(value) {
      return function() {
        console.log(value);
      }
    }(i))
  );
}

funcs.forEach(
  function(func) {
    func();
  }
);