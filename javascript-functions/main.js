function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResults:', convertMinutesToSecondsResult);

function greet(name) {
  const greeting = 'Hey, ' + name;
  return greeting;
}
const greetResult = greet('Beavis');
console.log('greetingResult:', greetResult);

function getArea(width, height) {
  const area = width * height;
  return area;
}
const getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  const firstNameIs = person.firstName;
  return firstNameIs;
}
const getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  const lastElementIndex = array.length - 1;
  const lastElementIs = array[lastElementIndex];
  return lastElementIs;
}
const getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult:', getLastElementResult);
