/* exported countdown */

function countdown(number) {
  const numberList = [];
  for (let i = number; i >= 0; i--) {
    numberList.push(i);
  }
  return numberList;
}
