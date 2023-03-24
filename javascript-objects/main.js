const student = {
  firstName: 'Daniel',
  lastName: 'Hahn',
  age: 26
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ' + fullName);

student.livesInIrvine = false;
console.log('value of student.livesInIrvine: ' + student.livesInIrvine);

student.previousOccupation = 'Logistics';
console.log('value of student.previousOccupation: ' + student.previousOccupation);

console.log('value of student: ', student);

const vehicle = {
  make: 'Audi',
  model: 'R8',
  year: 2023
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log('value of color: ' + vehicle['color']);
console.log('value of isConvertible: ' + vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

const pet = {
  name: 'Ollie',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
