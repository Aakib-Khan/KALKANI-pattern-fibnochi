const readline = require('readline');


function printPattern(luckyNumber) {
    let spaces = luckyNumber - 1;
    let pattern = '';
  
    // Print upper half of the pattern
    for (let i = 0; i < luckyNumber; i++) {
      pattern = ' '.repeat(spaces * 2);
      let numberCount = 1;
      let letterCount = 65;
      for (let j = 0; j <= i; j++) {
        pattern += (numberCount < 10 ? ' ' : '') + numberCount;
        numberCount += 2;
        if (j !== 0) {
          pattern += ' ' + String.fromCharCode(letterCount);
          letterCount++;
        }
      }
      console.log(pattern);
      spaces--;
    }
  
    // Print lower half of the pattern
    spaces = 1;
    for (let i = luckyNumber - 2; i >= 0; i--) {
      pattern = ' '.repeat(spaces * 2);
      let numberCount = 1;
      let letterCount = 65;
      for (let j = 0; j <= i; j++) {
        pattern += (numberCount < 10 ? ' ' : '') + numberCount;
        numberCount += 2;
        if (j !== 0) {
          pattern += ' ' + String.fromCharCode(letterCount);
          letterCount++;
        }
      }
      console.log(pattern);
      spaces++;
    }
  }
  
  // const luckyNumber = 3;
  // printPattern(luckyNumber);
  

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

  rl.question('Please enter your lucky number: ', function(input) {
    const luckyNumber = parseInt(input);
  
    if (!isNaN(luckyNumber)) {
      console.log('Pattern output:');
      printPattern(luckyNumber);
    } else {
      console.log('Invalid input. Please enter a valid number.');
    }
  
    rl.close();
  });