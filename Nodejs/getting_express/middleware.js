/*Middleware is the code that is excuted between the 
user request and the server itself */


const express = require('express');
const path = require('path');
//path is a utility module that deals with paths
const bodyParser= require('body-parser');
//Helps us post
const app = express();
app.use('/public',express.static(path.join(__dirname,'static')))
/*public is the alias for my http_module folder*/
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
/* Previously bodyParser.json ,that when the user makes a request
it tskes in the request and processes it
while now in this case , checks to see if the user has sent
any json data , processes it and then attaches it to the 
request about body and then it calls a function called 
next to let the server know "hey we're done processing this 
request you can now send another request" */
app.use('/example',(req,res,next)=>{
    /*next method must be invoked whenevr we create a custom
    middleware
    Next method is responsible to let express know that it has completed
    */
   req.banana='banana';
   console.log(req.banana);
   next();
})
app.get('/',(req,res)=>{
    res.send('Middleware')
});
app.listen(2000);
