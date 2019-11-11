// Exercise 10: Files, Args, Variables, Oh My

const fs = require('fs');

// Tried changing process.argv value to 0 and 1
// 0 spit out loads of weire computer language
// 1 spat out the path to this file and its contents
let file_to_open = process.argv[2];

let file_contents = fs.readFileSync(file_to_open);

console.log(`The file named ${file_to_open} contains:`);
console.log(file_contents.toString());