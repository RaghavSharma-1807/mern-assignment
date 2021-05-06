var readlineSync = require('readline-sync');

console.log("Enter the number upto where series would go");

var n= readlineSync.question();

var x=2;
console.log(x);
var i=4;
var m=2;
while(x<n)
{

  x=x+i;
  console.log(x);
  i=4;
  i=i*m;
  m++;

}

