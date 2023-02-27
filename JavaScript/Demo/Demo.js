function msg()
{
    alert("You Clicked Me....!");
}
function content()
{
    document.write("<h1>Welcome to Js</h1>");
}
function error(e)
{
    try{
        var a = 10;
        var b = 20;
        var c = a + e;
        document.write(a + " + " + e + " = " + c + "<br>");
        document.write(a + " + " + b + " = " + (a+b));
    }
    catch(err) 
    {
        console.log("Error : " , err);
        document.write("Error : " , err);
    }
}