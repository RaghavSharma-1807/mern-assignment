var readlineSync = require('readline-sync');
console.log("Enter the value of n");

var n= readlineSync.question();

var ncr;
var row=0;

while(row<n)
{
    var col=0;
    while(col<=row)
    {
    if(row==0|| col==0)
    {
        ncr=1;
        process.stdout.write((ncr)+"  ");
    }
    else{
        ncr=ncr*(row-col+1)/col;
        process.stdout.write((ncr)+"  ");
 
    }
    col++;
        
}

process.stdout.write("\n");
row++;
}