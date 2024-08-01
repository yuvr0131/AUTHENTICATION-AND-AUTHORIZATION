const cookieParser = require('cookie-parser');
const express=require('express');
const app=express();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
app.use(cookieParser());
//setting cookies
/*app.get("/", (req,res)=>{
res.cookie("name","yuvraj");
res.send("done");
})
//reading cookies
app.get("/read", (req,res)=>{
    console.log(req.cookies);
    res.send("read page");
    })*/

//bcrypt encryption
/*app.get("/", (req,res)=>{
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("singhyuvraj", salt, function(err, hash) {
           console.log(hash);
        });
    });
})*/

//bcrypt decryption-bcrypt compare
/*app.get("/", (req,res)=>{
    bcrypt.compare("singhyuvraj", "$2b$10$AHwQmOm6/rpmzWISWQ9.juGCkdRphzSKw1T2NpyleOcB0N2hmb1WK").then(function(result) {
        console.log(result);
    });
})*/

//jwt storing
app.get("/",function(req,res){
    let token=jwt.sign({email:"yuvr@gmail.com"},"secret");
    res.cookie("token",token);
    res.send("done");
})
//jwt decrypting data send from browser retrieving
app.get("/read",function(req,res){
    let data=jwt.verify(req.cookies.token,"secret");
    console.log(data);
})

app.listen(3000);