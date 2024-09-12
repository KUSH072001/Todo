let path=require('path')
const express=require('express');
let app=express()
let port=9000;
console.log(path.join(__dirname,'./newf/css'));

let staticPath=path.join(__dirname,'./newf/css')
app.use(express.static(staticPath))
app.listen(port,()=>{
    console.log(`working on ${port}`);
})