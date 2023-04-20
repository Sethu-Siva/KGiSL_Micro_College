const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('mysql2');

const add = express();
add.use(cors());
add.use(bodyParser.json());
add.use(express.json());

add.use(express.static('public'));

let conn = database.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "73848333Siva$",
        database: "kgisl"
    }
)

conn.connect(function(error)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log("DB Connected....!");
    }
});


add.get('/showDatas',(request,response) => {
    let sql = "select * from users";
    conn.query(sql,(error,result) => {
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send(result);
        }
    })
})

add.post('/addUser',(request,response) => {

    let {name,email,phone,password} = request.body;

    let sqlQuery = "insert into users (name,email,phone,password) values (?,?,?,?)";

    conn.query(sqlQuery,[name,email,phone,password],(error,result) => {

        if(error)
        {
            let status = {
                "status" : "Error"
            }
            response.send(status);
        }
        else
        {
            let status = {
            "status" : "Success"
            }
            response.send(status);
        }
    })
})

let port = 5000;

add.listen(port , () => {
    console.log(`Server running in ${port} Port`);
})
