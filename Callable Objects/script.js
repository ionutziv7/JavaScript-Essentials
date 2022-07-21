function name(fullname) {
  function nestedCallable() { }
  return fullname();
}

var obj = function() {};
const obj = function() {};

console.log(
  name(function () {})
);