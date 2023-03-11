console.log("test");

var a = [1,2,3,4,5];
var b = [6,7,3,9,10];

var z = [];

function find()
{
    for ( var i = 0; i < a.length; i++ )
    {
        for ( var j = 0; j < b.length; j++ )
        {
            if ( a[i] == b[j] )
            {
                z.push({
                    no : a[i],
                    name : "Sethu"
                })
            }
        }
    }
    return z;
}


console.log(find());