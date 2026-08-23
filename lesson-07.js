"use strict";

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.

let pizza = {
  flavor: "Chicken Fajita",
  size: "Large",
  price: 2.3,
  isAvailable: true,
};

console.log(pizza.flavor);
console.log(pizza.price);
let key = "size";
console.log(pizza[key]);
// bracket notation read and write through a string

// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.

pizza = {
  flavor: "Chicken Fajita",
  size: "Large",
  price: 2.3,
  isAvailable: true,
  describe: function () {
    return `${this.size} ${this.flavor} pizza is of price ${this.price}`;
  },
};
console.log(pizza.describe());

// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.

const menu = [
  {
    flavor: "Chicken Fajita",
    size: "Large",
    price: 2.3,
    isAvailable: true,
    describe: function () {
      return `${this.size} ${this.flavor} pizza — $${this.price}`;
    },
  },
  {
    flavor: "Pepperoni",
    size: "Medium",
    price: 1.8,
    isAvailable: true,
    describe: function () {
      return `${this.size} ${this.flavor} pizza — $${this.price}`;
    },
  },
  {
    flavor: "Veggie Delight",
    size: "Small",
    price: 1.2,
    isAvailable: false,
    describe: function () {
      return `${this.size} ${this.flavor} pizza — $${this.price}`;
    },
  },
  {
    flavor: "BBQ Ranch",
    size: "Large",
    price: 2.7,
    isAvailable: true,
    describe: function () {
      return `${this.size} ${this.flavor} pizza — $${this.price}`;
    },
  },
  {
    flavor: "Margherita",
    size: "Medium",
    price: 1.5,
    isAvailable: true,
    describe: function () {
      return `${this.size} ${this.flavor} pizza — $${this.price}`;
    },
  },
];

for (const item of menu) {
  console.log(`${item.size} ${item.flavor} pizza — $${item.price}`);
}

// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.

const vegetarianItems = menu.filter((item) => item.flavor.includes("Veggie")).map((item) => item.flavor)
console.log(vegetarianItems);

const cheapItem = menu.find((item) => item.price > 3)
console.log(cheapItem);
// find return undefined if not found

// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.

console.log(Object.keys(menu[1]));
console.log(Object.values(menu[1]));

for (let [key, value] of Object.entries(menu[1])) {
    console.log(`${key}: ${value}`);    
}


// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.

let secondItem = menu[1]
secondItem.price = 5

console.log(menu[1].price);

let spreadItem = {...menu[2], price: 4.1}
console.log(menu[2]);
console.log(spreadItem);


// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
const sentence =
  "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";

let seperatedWords = sentence.split(" ")
let counter = {}
for (let word of seperatedWords) {
    if (counter[word]) {
        counter[word] += 1
    } else {
        counter[word] = 1
    }
}
console.log(counter);
const sorted = Object.entries(counter).sort((a,b) => b[1] - a[1])
console.log(sorted);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
