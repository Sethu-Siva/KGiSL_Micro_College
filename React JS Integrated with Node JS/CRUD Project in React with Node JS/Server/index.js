const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('public'));

let conn = database.createConnection(
    {
        host : "localhost",
        user : "Sethu-Siva",
        password : "5656",
        database : "customer"
    }
);

conn.connect((err) => {
    if ( err )
    {
        console.log(err);
    }
    else
    {
        console.log("DB Connected SuccessFully...!");
    }
});


let port = 7200;

app.listen(port , () => {
    console.log(`Server Started in Port : ${port}`);
});