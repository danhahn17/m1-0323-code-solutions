const x = 1;
const y = 2;
const z = 3;

const maximumValue = Math.max(x, y, z);
console.log('maximumValue:', maximumValue);

const heroes = ['Iron Man', 'Spider Man', 'Black Panther', 'Doctor Strange'];

let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

const library = [
  {
    title: "Ender's Game",
    author: 'Orson Scott Card'
  },
  {
    title: 'Crying in H Mart',
    author: 'Michelle Zauner'
  },
  {
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury'
  }
];

const lastBook = library.pop();
console.log('lastBook:', lastBook);

const firstBook = library.shift();
console.log('firstBook:', firstBook);

const js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

const fullName = 'Daniel Hahn';

const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
