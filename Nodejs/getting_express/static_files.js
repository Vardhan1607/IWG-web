const express = require('express');
const path = require('path')
//path is a utility module that deals with paths
const app = express();
app.use('/public',express.static(path.join(__dirname,'static')))
/*public is the alias for my http_module folder*/
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});
app.listen(3000);