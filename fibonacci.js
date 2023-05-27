const readline = require('readline');

function fibonacciSeries(n) {
  var fib = [0, 1];

  while (fib[fib.length - 1] < n) {
    var nextNumber = fib[fib.length - 1] + fib[fib.length - 2];
    fib.push(nextNumber);
  }

  return fib.slice(0, -1).join(', ');
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', function(input) {
  var number = parseInt(input);

  if (!isNaN(number)) {
    var result = fibonacciSeries(number);
    console.log('Program output:');
    console.log(result);
  } else {
    console.log('Invalid input. Please enter a valid number.');
  }

  rl.close();
});
