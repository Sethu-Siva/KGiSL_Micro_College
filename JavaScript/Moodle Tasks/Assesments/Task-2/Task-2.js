function add()
{
    var ename = document.getElementById("ename").value;
    var empid = document.getElementById("empid").value;
    var des = document.getElementById("des").value;
    var pnum = document.getElementById("pnum").value;
    var bpay = document.getElementById("bpay").value;
    
    if ( (ename == "") || (empid == "") || (des == "") || (pnum == "") || (bpay == ""))
    {
        alert("All Fields marked with ( * ) are Required.");
    }
    else
    {
        addtotable(ename,empid,des,pnum,bpay,hra,da,pf,gp,np);
    }
}

function calc()
{
    var bpay = parseInt(document.getElementById("bpay").value);

    var hra = document.getElementById("hra");

    hra.value = (bpay * 15) / 100;

    var da = document.getElementById("da");
    
    da.value = (bpay * 15) / 100;

    var pf = document.getElementById("pf");
    
    pf.value = (bpay * 3) / 100;

    var gp = document.getElementById("gp");
    
    gp.value = parseInt(hra.value) + bpay + parseInt(da.value);

    var np = document.getElementById("np");
    
    np.value = parseInt(gp.value) - parseInt(pf.value); 
}

function addtotable()
{
    var td = document.getElementById("table_details");
    var ename = document.getElementById("ename").value;
    var empid = document.getElementById("empid").value;
    var des = document.getElementById("des").value;
    var pnum = document.getElementById("pnum").value;
    var bpay = document.getElementById("bpay").value;
    var hra = document.getElementById("hra").value;
    var da = document.getElementById("da").value;
    var pf = document.getElementById("pf").value;
    var gp = document.getElementById("gp").value;
    var np = document.getElementById("np").value;

    var cmds = '<tr>';

    cmds += `<td>${ename}</td><td>${empid}</td><td>${des}</td><td>${pnum}</td><td>${bpay}</td><td>${hra}</td><td>${da}</td><td>${pf}</td><td>${gp}</td><td>${np}</td>`

    cmds += '</tr>'

    td.innerHTML = cmds;
}
function validateName()
{
    var name = document.getElementById("ename").value;

    var ptn = new RegExp(/^[^0-9\W_][A-z_]$/);

    if (name.match(ptn))
    {
        var sts = true;
    }
    else
    {
        var nameptn = document.getElementById("nameptn");
        nameptn.style.color="Red";
        nameptn.innerText = ""
    }
}