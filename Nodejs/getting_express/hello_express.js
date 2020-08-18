const express = require('express');
const app = express();
/*This function is gonna return an object
and this object will return a bunch of methods
that we can use within our application*/
app.get('/',(req,res)=>{
    res.send('Hello Express');
});
app.listen(3000);