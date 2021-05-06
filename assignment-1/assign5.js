var readlineSync = require('readline-sync');
console.log("Enter the number");
var n= readlineSync.question();
var  res;
var count=0;
while(n!=0)
{
    res=  n  % 10;
    count=count+1;
    n=parseInt(n/10);
}
console.log(count);