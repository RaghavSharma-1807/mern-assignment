var readlineSync = require('readline-sync');


var rev=0;
var  res;
console.log("Enter the number");
var n = readlineSync.question();
while(n!=0)
{

    res=  n  % 10;
    rev =  rev*10 + res;
    n=parseInt(n/10);
    
}
console.log(rev);