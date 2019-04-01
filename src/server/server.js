const express = require('express');
const app = express();
const mysql = require('mysql');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.all('*', function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.get('/', function(req, res){
    console.log('hello world');
});

app.post('/login', jsonParser, function(req, res){
    let data = req.body;
    if(data.userName === "tian" && data.password === "1234"){
        res.send({success: true});
    }else{
        res.send({success: false});
    }
});

app.post('/register', jsonParser, function(req, res){
    let results = {
        success: false,
    }
    let data = req.body;
    let insertData = {
        phoneNumber: data.phoneNumber
    }
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:'1234',
        database: 'userdb',
        connectTimeout: 2000,
    });
    connection.connect( (err) => {
        if(err){
            console.err('err connecting', err.stack);
            return ;
        }

        console.log('connection as id', connection.threadId);
    });
    
    connection.query('INSERT INTO zhihuRegistered SET ?', insertData, (err, fields) =>{
        if(err) throw err;
        results.success = true;
        console.log('insert fields:', fields);
    });

    connection.end( (err) => {
        if(err) {
            throw err;
            return;
        }
        res.send(results);
        console.log('connection closes');
    });
});

let server = app.listen('8080', function(){
    const host = server.address().host;
    const port = server.address().port;
    console.log('server starts....');
    console.log('*===============*');
    console.log('server is running at ', host, ':', port);
})