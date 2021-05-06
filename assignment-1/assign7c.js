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
        process.stdout.write((col+1)+" ");
        col++;
    }
    var col=0;
    //var x=0;
    while(col<row)
    {

        process.stdout.write((row-col)+" ");
        col++;
        //row--;
       // col--;

    }
    process.stdout.write("\n");
    row++;
}
