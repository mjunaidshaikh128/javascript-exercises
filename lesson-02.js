'use strict';

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.
const shopName = "The Corner Bakery"; // const because the name of the shop does not change
const shopLocation = "123 Main Street"; // const because the location of the shop does not change
let currentInventory = 50; // let because the inventory level can change
let dailySales = 0; // let because the daily sales can change
const isCurrentlyOpen = true; // const because the open/closed status doesn't change during the day

console.log(shopName);
console.log(shopLocation);
console.log(currentInventory);
console.log(dailySales);
console.log(isCurrentlyOpen);


// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.
console.log(typeof shopName); // string
console.log(typeof shopLocation); // string
console.log(typeof currentInventory); // number
console.log(typeof dailySales); // number
console.log(typeof isCurrentlyOpen); // boolean
console.log(typeof null); // object (historical bug)
console.log(typeof undefined); // undefined

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.
let noValue;
let nullValue = null;

console.log(noValue);
console.log(typeof noValue); // undefined
console.log(nullValue);
console.log(typeof nullValue); // object
// The difference is that `undefined` means a variable has been declared but not assigned a value, while `null` is an intentional assignment of "no value".

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";

const priceNumber = Number(priceText);
const countNumber = Number(countText);
const flagBoolean = Boolean(flagText);
const myNumber = 42;
const myString = String(myNumber);

console.log(priceNumber);
console.log(typeof priceNumber);
console.log(countNumber);
console.log(typeof countNumber);
console.log(flagBoolean);
console.log(typeof flagBoolean);
console.log(myNumber);
console.log(typeof myNumber);
console.log(myString);
console.log(typeof myString);
// The conversion of `priceText` and `countText` to numbers would produce `NaN` if the strings were not clean numbers (e.g., if they contained letters or symbols).

// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
let bakeryName = "Maison Sarah";
bakeryName = "The Corner Bakery"; // Reassigned `const` to `let` to allow reassignment
const openingHour = 7; // Added `const` declaration for `openingHour` to fix the assignment to an undeclared variable
let loafCount = 12;
console.log(loafCount); // Moved the `console.log` statement after the declaration of `loafCount` to fix the variable read before its declaration


// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.

let a = 1;
let b = 2;
let temp = a;
a = b;
b = temp;

console.log(a); // 2
console.log(b); // 1

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
