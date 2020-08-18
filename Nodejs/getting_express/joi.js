const express = require('express');
const Joi= require('joi')
const path = require('path');
//path is a utility module that deals with paths
const bodyParser= require('body-parser');
//Helps us post
const app = express();
app.use('/public',express.static(path.join(__dirname,'static')))
/*public is the alias for my http_module folder*/
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required()
    });
    Joi.validate(req.body,schema,(err,result)=>{
        if(err){
            console.log(err);
            res.send('An error occured');
        }
        console.log(result);
            res.srnd('Successfully done')
    })
});
app.post('/',(req,res)=>{
    console.log(req.body);
    // database work here
    res.json({success: true});
    //We get the data from 
})
app.listen(2000);