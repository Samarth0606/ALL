let express = require('express');
let app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/movie-sam')
.then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log(err)
})


let movieSchema = new mongoose.Schema({
    name: String,  
    year: Number,
    imdb: Number
})
const Movie = mongoose.model('Movie', movieSchema);




app.listen(8080 , ()=>{
    console.log('server connectd at port 8080');
})