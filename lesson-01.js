'use strict';

// Lesson 01 exercise: Running JavaScript three ways
// Clone the exercise repository for this course, https://github.com/Leon-Arno/JS-Exercises, to
// your computer.
// Make the copy your own. Inside the cloned folder, delete the `.git` folder to remove the
// connection to the original repository: run `rm -rf .git` on macOS and Linux, or `Remove-Item
// -Recurse -Force .git` in PowerShell on Windows.
// Run `git init` in the folder, create a new empty repository named `javascript-exercises` on
// your own GitHub account, connect it as the remote, and push. This is the same publishing
// flow you performed in the Git course.
// Create a branch named `lesson-01-exercise` and switch to it, then open `lesson-01.js`. The
// questions are already inside as comments; work through them in order, writing your answers
// directly beneath each one.

// TODO: Part one.
// Start the Node REPL and evaluate at least four arithmetic expressions of your own, using
// more than one operator across them. Copy the complete session transcript and paste it into
// `lesson-01.js` as a comment block where the question asks for it.

// PS C:\Users\Lenovo> node
// Welcome to Node.js v20.15.0.
// Type ".help" for more information.
// > 2+2
// 4
// > 2 - 2 / 3
// 1.3333333333333335
// > 2 * 24
// 48
// > 2/4 + 1
// 1.5
// >


// TODO: Part two.
// Write a `console.log` line in `lesson-01.js` that prints a greeting, save the file
// deliberately, and run it with `node lesson-01.js`.
console.log('Hello, welcome to the JavaScript exercises!');

// TODO: Part three.
// Change the greeting text, run the file again without saving, and observe that the output has
// not changed. Save and run once more, then describe in a one-sentence comment what happened
// and why.
// The output did not change when I ran the file without saving because Node.js executes the last saved version of the file, so any unsaved changes are not reflected in the output.

// TODO: Part four.
// Run your greeting line in the Chrome DevTools Console. In a comment, record one way the
// experience matched Node and one way it differed.
// One way the experience matched Node.js is that both environments allow you to execute JavaScript code and see the output immediately. One way it differed is that the Chrome DevTools Console is part of a web browser and provides additional features like inspecting elements and debugging web pages, while Node.js is a standalone runtime for executing JavaScript on the server side.

// TODO: Part five.
// From a folder that does not contain the file, deliberately run `node lesson-01.js` so that
// the terminal reports it cannot find the file. Paste that error transcript as a comment, then
// explain in one sentence how you resolved it.

// PS C:\Users\Lenovo\Documents\startupistan> node .\lesson-01.js 
// node:internal/modules/cjs/loader:1148
//   throw err;
//   ^

// Error: Cannot find module 'C:\Users\Lenovo\Documents\startupistan\lesson-01.js'
//     at Module._resolveFilename (node:internal/modules/cjs/loader:1145:15)
//     at Module._load (node:internal/modules/cjs/loader:986:27)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//     at node:internal/main/run_main_module:28:49 {
//   code: 'MODULE_NOT_FOUND',
//   requireStack: []
// }

// Node.js v20.15.0
// I resolved the error by navigating to the correct directory where `lesson-01.js` is located before running the command, ensuring that Node.js can find and execute the file.

// TODO: Save the file, commit your work with a clear message, push the branch, and open a pull
// request into your main branch.
// TODO: Submit the link to the pull request for review.
