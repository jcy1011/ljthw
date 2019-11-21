const geometry = require('./geometry');

let area51 = geometry.area(2.8);
let circ2 = geometry.circumference(6);
let earth = geometry.volume(3963);

console.log(`Area: ${area51},\nCircumference: ${circ2},\nVolume: ${earth}`);