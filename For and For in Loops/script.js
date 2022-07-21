var classRegister = ["John", "Jon", "Johnny"];

console.log("Printing the array: ");
for (var i = 0; i < classRegister.length; i++) {
  console.log(classRegister[i]);
}

console.log("\nPrinting the array in reverse order: ");
for (var i = classRegister.length - 1; i >= 0; i--) {
  console.log(classRegister[i]);
}

console.log('');

console.log("Printing the array using for in");
for (var index in classRegister) {
  console.log(classRegister[index]);
}