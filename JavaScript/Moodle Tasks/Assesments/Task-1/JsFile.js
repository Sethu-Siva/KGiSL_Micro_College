async function show()
{
    var res = await fetch ('https://fakestoreapi.com/products/');
    var datas = await res.json();
    var a = '';
    datas.map((value,index) => {
        a += '<div><table id="mytable"><tbody><tr>';
        a += '<td><img src="' + value.image + '" alt="' + value.title + '" width="200px" height="200px"/></td>'
        a += '<td><b>' + value.title + '</b><br>'
        a += 'Price : $'+ value.price +'<br>';
        a += 'description : '+ value.description +'<br>';
        a += 'category : ' + value.category + '<br>';
        a += '</td></tr></tbody></table></div>';
    });

    document.getElementById("primary-div").innerHTML = a;
}