var readlineSync = require('readline-sync');
console.log("Enter the value of n");

var n= readlineSync.question();

var row=0;
while(row<n)
{
    var col=0;
    while(col<n-row-1)
    {
        process.stdout.write("  ");
        col++;
    }

    var col=0;
    while(col<=row)
    {
        process.stdout.write((col+1+row)+" ");
        col++;
    }
    var col=0;
    while(col<row)
    {

        process.stdout.write((2*row-col)+" ");
        col++;
    }
    process.stdout.write("\n");
    row++;
}