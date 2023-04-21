const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dataBase = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('public'));

let conn = dataBase.createConnection(
    {
        host : "localhost",
        user : "Sethu-Siva",
        password : "5656",
        database : "customer"
    }
);

conn.connect((error) => {
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log("DataBase Connected SuccessFully...!");
    }
});









let port = 7200;

app.listen(port, () => {
    console.log(`Server started in Port : ${port}`);
});