/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('getNumbersToTen():', getNumbersToTen());

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;

  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('getEvenNumbersToTwenty():', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  let count = 1;
  let repeated = '';

  while (count <= times) {
    repeated += word + ' ';
    count++;
  }
  return repeated;
}
console.log('repeatWord:', repeatWord('Eureka!', 5));

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string.charAt(i));
  }
}
console.log('logEachCharacter(Empty String):', logEachCharacter(''));
console.log('logEachCharacter(Name):', logEachCharacter('Daniel'));
console.log('logEachCharacter(Sentence):', logEachCharacter('This is exciting'));

function doubleAll(numbers) {
  const doubled = [];

  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('doubleAll(ex.1):', doubleAll([1, 2, 3, 4]));
console.log('doubleAll(ex.2):', doubleAll([2, 4, 6, 8]));
console.log('doubleAll(ex.3):', doubleAll([3, 7, 4, 11]));

function getKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
console.log('getKeys(ex.1)', getKeys({ type: 'Dog', breed: 'Cavapoochon', name: 'Ollie' }));
console.log('getKeys(ex.2)', getKeys({ relation: 'Sister', age: 24, occupation: 'Dental Student' }));

function getValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
console.log('getValues(ex.1)', getValues({ type: 'Dog', breed: 'Cavapoochon', name: 'Ollie' }));
console.log('getValues(ex.2)', getValues({ relation: 'Sister', age: 24, occupation: 'Dental Student' }));
