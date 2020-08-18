const express = require('express');
const path = require('path');
//path is a utility module that deals with paths
const bodyParser= require('body-parser');
//Helps us post
const app = express();
app.use('/public',express.static(path.join(__dirname,'static')))
/*public is the alias for my http_module folder*/
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});
app.post('/',(req,res)=>{
    console.log(req.body);
    // database work here
    res.send('Successfully posted data');
    //We get the data from 
})
app.listen(3000);