var readlineSync = require('readline-sync');
console.log("Enter the value of n");

var n= readlineSync.question();


var row=1;
while(row<=n)
{
    var col=1;
    while(col<=n-row)
    {
        process.stdout.write("  ");
        col++;
    }
    var col=1;
    while(col<=2*row-1)
    {
        process.stdout.write("* ");
        col++;
    }
    process.stdout.write("\n");
    row++;
}
var r=n-1;
while(r>=1)
{
    var space=1;
    while(space<=n-r)
    {
        process.stdout.write("  ");
        space++;
    }
    var col=1;
    while(col<=2*r-1)
    {
        process.stdout.write("* ");
        col++;
    }
    process.stdout.write("\n");
    r--;

}




