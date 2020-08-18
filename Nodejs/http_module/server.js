/*HTTP*/
/*Basically it creates a webserver with node js */
const http = require('http');
/*createServer is going to give us a http server object */
/*res object is what the client requests from us*/

const server = http.createServer((req,res)=>{
    res.write('Hello world from nodejs');
    res.end()
});
/* This function is telling nodejs that 
what port are we listening to*/
server.listen('3000');
