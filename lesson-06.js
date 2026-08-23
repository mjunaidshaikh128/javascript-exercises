"use strict";

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.
const menuItems = [
  "Chocolate cake",
  "Egg Sandwich",
  "Beef Wellington",
  "Fries",
  "Bread",
];
for (let item of menuItems) {
  console.log(item);
}
console.log(menuItems.length);

// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.

menuItems.push("smoked salmon"); // added item at the end of the array
console.log(menuItems);
menuItems.unshift("pepperoni pizza"); // added item at the start of the array
console.log(menuItems);
menuItems.pop(); // removed item at the end of the array
console.log(menuItems);
menuItems.shift(); // removed item at the start of the array
console.log(menuItems);

// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.

for (let i = 0; i < menuItems.length; i++) {
  console.log(menuItems[i]);
} // when control and index is required
for (let item of menuItems) {
  console.log(item);
} // when you want to loop at every item in the arraay

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// * The provided prices:
const prices = [4.5, 12, 3.2, 8];

let displayStrings = prices.map((price) => `$${price}`)
console.log(displayStrings);

let underFiveItems = prices.filter((price) => price < 5)
console.log(underFiveItems);

let underTenItem = prices.find((price) => price > 10)
console.log(underTenItem);

// forEach does not return anything and the result would have been undefined

// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
];

artists.push("Junaid Shaikh")

for (const artist of artists) {
  console.log(`=== ${artist} ===`);
  console.log(`Listen to ${artist} now on every platform`);
}

// artists being added but the logic is not being written over again instead being reused.

// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.

let secondMenuItems = menuItems
secondMenuItems.push("new Item")
console.log(menuItems);
console.log(secondMenuItems);

let spreadMenuItems = [...menuItems]
spreadMenuItems.push("another item")
console.log(menuItems);
console.log(spreadMenuItems);

// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

function fizzBuzzValue(n) {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n;
}

for (let i = 1; i <= 100; i++) {
    console.log(fizzBuzzValue(i));
}

const numbers = [12, 5, 41, 8, 33, 2, 27];

let sum = 0;
let largest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log("Sum:", sum);
console.log("Largest:", largest);

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}

function isPalindrome(word) {
  const lower = word.toLowerCase();
  return lower === reverseString(lower);
}

const words = ["Racecar", "Level", "Hello"];

for (const w of words) {
  console.log(w, "→ reversed:", reverseString(w));
  console.log("vowels:", countVowels(w));
  console.log("palindrome:", isPalindrome(w));
  console.log("-----");
}

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
