var fruitsStr = "Apple,Banana,Mango,Orange,Papaya";
var fruitsArr = fruitsStr.split(",");

console.log(fruitsArr[0]);
console.log(fruitsArr[2]);
console.log(fruitsArr[fruitsArr.length-1]);

for ( var i in fruitsArr )
{
    console.log(fruitsArr[i]);
}