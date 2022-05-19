const express=require('express')
const app=express();
require('dotenv').config()
const port=process.env.PORT || 6600
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('home')
}).listen(port,()=>{
    console.log(`http://localhost:${port}`)
})