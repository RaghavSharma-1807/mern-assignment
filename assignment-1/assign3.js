var readlineSync = require('readline-sync');

var n1 = readlineSync.question();
var n2 = readlineSync.question();

 let gcd= function(n1,n2)
{
    if(n2==0)
    {
        return n1;
    }
        return gcd(n2,n1%n2);
}

console.log(gcd(n1,n2));