function collectAnimals(...animals) {
  return animals;
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

const fruit = ["apple", "pear"];
const sweets = ["cake", "pie"];
const vegetables = ["carrit"];

const food = {
  fruit,
  sweets,
  vegetables
};

console.log(food);

const vacation = {
  location: "Burly Idaho",
  duration: "2 weeks"
};

const { location, duration } = vacation;

console.log(`We're going to have a good time in ${location} for ${duration}`);

const items = [true, false];
const [firstItem, ...a] = items;
console.log(firstItem);

const favoriteActivitiesInOrder = [
  "magnets",
  "snowboarding",
  "philanthropy",
  "janitor work",
  "eating"
];

const [firstFav, secondFav, thirdFav, ...rest] = favoriteActivitiesInOrder;

console.log(
  "My top three favorite activities are, " +
    firstFav +
    ", " +
    secondFav +
    ", and " +
    thirdFav
);
console.log(rest);

//combine animals or arrays using reduce
function combineAnimals(...animalArrays) {
  return animalArrays.reduce((acc, array) => [...acc, ...array], []);
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

//multiple numbers together using reduce
const product = (...numbers) => {
  return numbers.reduce((acc, number) => acc * number, 1);
};

console.log(product(1, 2, 3, 4, 5, 6));


const unshift = (first, ...rest) => {
  return [...rest, ...first];
}

console.log(unshift([2,3,4],5));


function populatePeople(names) {
  return names.map(name => {
    const [firstName, lastName] = name.split(" ");
    return {
      firstName,
      lastName
    };
  });
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
