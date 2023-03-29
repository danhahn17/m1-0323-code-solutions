/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  return number < 5;
}
console.log('4 is under five:', isUnderFive(4));
console.log('10 is under five:', isUnderFive(10));
console.log('5 is under five:', isUnderFive(5));

function isEven(number) {
  return number % 2 === 0;
}
console.log('4 is even:', isEven(4));
console.log('10 is even:', isEven(10));
console.log('5 is even:', isEven(5));

function startsWithJ(string) {
  return string.charAt(0) === 'J';
}
console.log('Javascript starts with J:', startsWithJ('Javascript'));
console.log('PHP starts with J:', startsWithJ('PHP'));
console.log('HTML starts with J:', startsWithJ('HTML'));
console.log('Java starts with J:', startsWithJ('Java'));
console.log('Kotlin starts with J:', startsWithJ('Kotlin'));
console.log('C# starts with J:', startsWithJ('C#'));

function isOldEnoughToDrink(person) {
  return person.age >= 21;
}
const bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10
};
console.log(bart.name + ' ' + 'is old enough to drink:', isOldEnoughToDrink(bart));

function isOldEnoughToDrive(person) {
  return person.age >= 16;
}
const homer = {
  name: 'Homer Jay Simpson',
  age: 39
};
console.log(homer.name + ' ' + 'is old enough to drive:', isOldEnoughToDrive(homer));

function isOldEnoughToDrinkAndDrive(person) {
  return (person.age >= 21) && !(person.age >= 16);
  // Should return false no matter what age is put in.
}
const dan = {
  name: 'Daniel Hahn',
  age: 25
};
console.log(dan.name + ' ' + 'is old enough to drink and drive:', isOldEnoughToDrinkAndDrive(dan));

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if ((pH > 0) && (pH < 7)) {
    return 'acid';
  } else if ((pH > 7) && (pH < 14)) {
    return 'base';
  } else if ((pH > 14) || (pH < 0)) {
    return 'invalid pH level';
  }
}
console.log('Categorize acidity of -1:', categorizeAcidity(-1));
console.log('Categorize acidity of 14.0000001:', categorizeAcidity(14.0000001));
console.log('Categorize acidity of 7:', categorizeAcidity(7));
console.log('Categorize acidity of 2:', categorizeAcidity(2));
console.log('Categorize acidity of 9:', categorizeAcidity(9));

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return "We're warner brothers!";
    case 'dot':
      return 'I\'m cute~';
    default:
      return 'Goodnight everybody!';
  }
}
console.log('Yakko\'s Warner Bro intro:', introduceWarnerBro('yakko'));
console.log('Wakko\'s Warner Bro intro:', introduceWarnerBro('wakko'));
console.log('Dot\'s Warner Bro intro:', introduceWarnerBro('dot'));
console.log('Cody\'s Warner Bro intro:', introduceWarnerBro('cody'));
console.log('Minerva\'s Warner Bro intro:', introduceWarnerBro('minerva'));

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'The Big Lebowski';
    case 'horror':
      return 'Insidious';
    case 'drama':
      return 'Forest Gump';
    case 'musical':
      return 'La La Land';
    case 'sci-fi':
      return 'Interstellar';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi.';
  }
}
console.log('Movie Recommended for Action:', recommendMovie('action'));
console.log('Movie Recommended for Comedy:', recommendMovie('comedy'));
console.log('Movie Recommended for Random:', recommendMovie('random'));
