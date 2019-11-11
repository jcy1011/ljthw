// https://nodejs.org/api/fs.html
const fs = require("fs");

let contents = fs.readFileSync("test.txt");

console.log("Contents:");
console.log(contents.toString());

// using a callback

let buttstink = "dingleberry"

console.log("--------------------");
fs.readFile("test.txt", (err, data) => {
    console.log(data.toString());
    console.log("I am JOB")
    console.log(buttstink)
});