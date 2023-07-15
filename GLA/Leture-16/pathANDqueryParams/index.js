const express = require('express');
const app = express();


app.get('/' , (req,res)=>{
    res.send('<h2>helloo</h2>')
})

app.get('/r/:kuchbhi' , (req,res)=>{
    let {kuchbhi} = req.params; //destructures
    res.send(`subreddit hu mai of ${kuchbhi}`)
})

app.get('/search' , (req,res)=>{
    let {aawaz , kaan} = req.query; //destructure
    res.send(`mai query hu ${aawaz} hearing in ${kaan}`)
})


app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
})