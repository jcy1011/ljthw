const area = (r) => Math.PI * r ** 2;
const circumference = (r) => 2 * Math.PI * r;
const volume = (r) => 4 / 3 * Math.PI * r ** 3;

module.exports = {
    area: area,
    circumference: circumference,
    volume: volume
}