/*EJS is a template lansuage which will allow us to write more
dynamic web pages*/
const express = require('express');
const path = require('path')
//path is a utility module that deals with paths
const app = express();
app.use('/public',express.static(path.join(__dirname,'static')))
/*public is the alias for my http_module folder*/
app.set('view engine','ejs');
/*Setting the view of our application*, second arg is the 
template we are using
EJS automatically knows that our file ios in views as it is the default folder */
app.get('/:userQuery',(req,res)=>{
    res.render('index',{data:{userQuery:req.params.userQuery,
                            searchResults:['book1','book2','book3']}});
});
app.listen(3000);
/*In the website if we use localhost:3000/books
We will get ' You have searched for books' */