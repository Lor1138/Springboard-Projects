let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ? = 8
console.log(yearNeptuneDiscovered); // ? 1846

let planetFacts = {
    numPlanets2: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets2, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // ? 1846, 1659

  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ? Your name is Alejandro and you like purple
  getUserData({firstName: "Melissa"}) // ? Your name is Melissa and your favorite color is green (adds default value)
  getUserData({}) // ? Your name is undefined and your favorite color is green.

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ? Maya
console.log(second); // ? Marisa
console.log(third); // ? Chi

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // ? Raindrops on roses
  console.log(whiskers); // ? whiskers on kittens
  console.log(aFewOfMyFavoriteThings); // ? Bright copper kettles, warm woolen mittens, Brown paper packages tied up with strings.

//let numbers = [10, 20, 30];
//[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

//console.log(numbers) // ? 10, 30, 20

//ES5 Assigning Variables to Object Properties
let obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };

  const {numbers:{a,b}} = obj
  console.log(a, b)

//ES2015 One-Line Array Swap with Destructuring

let arr = [1, 2];
[first, last] = arr;
[first, last] = [last, first]

console.log(first, last)

/*
  raceResults()
Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.

first: the first element in the array
second: the second element in the array
third: the third element in the array
rest: all other elements in the array
Write a one line function to make this work using
An arrow function
Destructuring
‘Enhanced’ object assignment (same key/value shortcut)
*/

const raceResults = ([first, second, third, ...losers]) => ({first, second, third, losers})

