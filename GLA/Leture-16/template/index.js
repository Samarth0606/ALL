let express = require('express')
let app = express();
let path = require('path');

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));


const todos = ['hi' , 'hello' , 'welcome'];

app.get('/' , (req,res)=>{
    res.render('index')
})

app.get('/random' , (req,res)=>{
    let rn = Math.floor(Math.random()*100) ;
    res.render('random' , {rn})
})

app.get('/todo' , (req,res)=>{
    res.render('todos' , {todos})
})


app.listen(8080 , ()=>{
    console.log('server connected at port 8080')
})