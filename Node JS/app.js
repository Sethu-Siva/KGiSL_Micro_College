const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
const bodyParser = require('body-parser');
const database = require('mysql');

const add = express();
add.use(cors());
add.use(fileupload());
add.use(bodyParser.json());
add.use(express.json());

add.use(express.static('public'));

let conn = database.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "73848333Siva$",
        database: "User"
    }
)

conn.connect(function(error) {
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log("DB Connected....!");
    }
});

add.listen(8001, () => {
    console.log("Server running in 8000 Port");
})