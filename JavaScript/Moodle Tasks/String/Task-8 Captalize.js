function capitalizeWords(str)
{
    var strArr = str.split(" ");

    var CapStr = "",temp = 0;

    for ( var i = 0; i < strArr.length; i++ )
    {
        CapStr += strArr[i].charAt(temp).toUpperCase();

        for ( var j = 1; j <= strArr[i].length; j++ )
        {
            CapStr += strArr[i].charAt(j);
        }
        CapStr += " ";
    }
    return CapStr;
}

console.log(capitalizeWords('javaSctipt is a scripting language..'));