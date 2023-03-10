async function display()
{
    var response = await fetch('SampleJSON.json');
    var datas = await response.json();
    datas.map((value) => {
        console.log(value.address.city);
    });
}
display();