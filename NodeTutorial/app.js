//in public folder, to work locally in terminal run: node app.js 
var express = require('express');
//var hbs = require('hbs');
var app = express();
//app.set('view engine',hbs); //sets render engine for res.render
app.get('/', (req,res) =>{
    res.send('A message is sent.');
});

// app.get('/web', (req,res)=>{
//     info = {
//         word = req.query.word
//     };
//     res.render('index', info);
// })
app.get('/webOne', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
});
//Put whatever port here instead, like 3000
app.listen(process.env.PORT, function(){
    console.log('listening');
});