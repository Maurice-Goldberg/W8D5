const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const addNumbers = function (sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
      reader.question('Please provide a number', (res) => {
        let newSum = sum + parseInt(res);
        console.log(newSum);
        addNumbers(newSum, numsLeft - 1, completionCallback);
      });            
  } else {
    reader.close();
    return completionCallback(sum);      
  } 
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));