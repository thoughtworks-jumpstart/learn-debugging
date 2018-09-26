// let a = 2;
// let b = 40;
// let c = a + b;

// for (var i = 1; i < 10; i++) {
//   var result = i * 2;
//   console.log(result);
// }

//  example 1: inspect the values of `i` and `result` in the for loop
for (var i = 1; i < 10; i++) {
  var result = i * 2;

  console.log(result);
}

// example 2: fizzbuzz. inspect the values of `input` and `output`
function fizzbuzz(input) {
  var output = "";
  if (input % 3 == 0) {
    output += "Fizz";
  }
  if (input % 5 == 0) {
    output += "Buzz";
  }

  if (input % 3 != 0 && input % 5 != 0) {
    output = String(input);
  }
  return output;
}

fizzbuzz(22)