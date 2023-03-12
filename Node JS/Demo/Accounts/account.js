module.exports.find = async function(a,b)
{
    var z = [];

    var names = [ "Sindhu" , "Sethu" , "Arun" , "Abi" , "Antony" ];

    for ( var i = 0; i < a.length; i++ )
    {
        for ( var j = 0; j < b.length; j++ )
        {
            if ( a[i] == b[j] )
            {
                z.push({
                    no : a[i],
                    name : names[i]
                })
            }
        }
    }
    return z;
}