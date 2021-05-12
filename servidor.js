const express = require('express');
const path = require('path');
const app = express ();

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.post('/saludar', function (req,res){
    res.send(`${req.body.name} ${req.body.nickname} ${req.body.lastName}`);
});

app.listen(3000, function (){
    console.log('Servidor iniciado en puerto 3000.')
});