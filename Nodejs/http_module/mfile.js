const http=require('http')
const fs = require('fs');
http.createServer((req,res)=>{
    const readStream= fs.createReadStream('index.html');
    /* Header is to let the client know
    what kind of data i am expecting*/
    /*http 200 implies request has been successfully submitted
    404 is a not found error*/
    res.writeHead(200,{'Content-type':'text/html'});
    readStream.pipe(res);
}).listen(3000);
/* if we want to read a .json file
we have to change its name in line 4
and in line 9 we have to make it application/json
if we want to read a .png file
we have to chnage its name in line 4
and in line 9 change it to image/png*/
