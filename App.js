
const express = require("express");
const fs = require('fs');        

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname));
app.get('/',function(req, res){
    res.sendFile(__dirname+"/form.html");
});

app.post('/form-submit', function(req, res){
    var n1 = JSON.stringify(req.body.name);
    var n2 = JSON.stringify(req.body.id);
    var n3= JSON.stringify(req.body.address);
    var n4 = JSON.stringify(req.body.ds);
    var n5 = JSON.stringify(req.body.wb);
    var n6 = JSON.stringify(req.body.se);
    var n7 = JSON.stringify(req.body.c);
    var n8 = JSON.stringify(req.body.pj);
    console.log();
    fs.appendFile('FormData.json',"{Name:"+n1+",Id:"+n2+",Address:"+n3+",Data Structures:"+n4+",Web Design:"+n5+",Software Engineering:"+n6+",C++:"+n7+",Project:"+n8+"}", err=>{
        if(err){
            throw err
        }
        console.log("File is updated.");
        res.sendFile(__dirname+'/FormData.json');
    })
});

app.listen(5000);