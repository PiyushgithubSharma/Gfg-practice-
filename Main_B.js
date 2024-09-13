// for ejs file install ejs from npm  (npm i ejs)

const express = require('express')
const app = express()
const path = express("path");
const fs = express("fs");

app.set('view engine','ejs')
app.get(express.json());
app.get(express.urlencoded(__dirname,'./public'))


// app.use(function(req,res,next){
//     console.log("middleware chala");
//     next();
    
// })


app.get('/',function(req,res){
    res.send('my name is piyush sharma')
});



app.get("/first",function(req,res){
    res.render("index");
})

app.get("/second",function(req,res){
    res.render('second');
})

app.get("/third",function(req,res){
    res.render("third")
})

app.listen(3000);
