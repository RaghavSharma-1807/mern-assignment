var readlineSync = require('readline-sync');

console.log("Enter the p,r,t ");


var p = readlineSync.question();
var rate = readlineSync.question();
var time = readlineSync.question();


let si=(p*rate*time)/100;
console.log(si);