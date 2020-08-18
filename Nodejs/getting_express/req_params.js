const express = require('express');
const app = express();
/*This function is gonna return an object
and this object will return a bunch of methods
that we can use within our application*/
app.get('/example',(req,res)=>{
    res.send('Hitting example Route');
});
//Route Parameters
app.get('/example/:name/:age',(req,res)=>{
    /*Here when we use localhost:3000/name/age
    we get back in visual studio code
    the name and age*/
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + ' : ' + req.params.age);
})
/*Cury String Parameter: res.query 
When we do the above and then in the url 
if we add ?x=y 
In VSC we get back {x:'y'}
If we want to get more than one strings back
we use ?x=y & ?a=b
so that we get back {x:'y', a:'b'} */

app.listen(3000);