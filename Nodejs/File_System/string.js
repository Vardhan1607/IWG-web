const fs=require('fs');
const readStream= fs.createReadStream('./example.txt','utf-8');
const writeStream = fs.createWriteStream('example2.txt');
/* readstream can listen for an event
readstream object inherits from the eventEmitter class*/
readStream.on('data',(chunk)=>{
    console.log(chunk);
    writeStream.write(chunk);
    /*When we get the chunk we can manipulate it
    we need not wait for the whole file to load*/

})
/* .readFile uses a buffer, but it uses a
full buffer, that means, we need atleast 2.7gb 
in memory in order to load this file
Because this file has to be fit within the buffer*/
/* This task can be accomplished by Streams 
but not by readfile as stream uses a very very
small buffer and what that allows us to do is 
basically we end up reading out in chunks
we arent reading the entire file at once*/
