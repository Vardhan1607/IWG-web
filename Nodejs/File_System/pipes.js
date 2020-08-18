/*Pipes*/
/* It basically allows us to take a source string
and send it over to a destination which is
the writeable string*/
const fs = require('fs');
const readStream = fs.createReadStream('./example2.txt','utf8');
const writeStream = fs.createWriteStream('./example2.txt');
/*readStream.on('data',(chunk)=>{
 writeStream.write(chunk);
})
There is a simpler way of doing the above*/
readStream.pipe(writeStream);
/*Inorder to use a pipe we need source stream
and a destination stream*/
const zlib= require('zlib')
/* It is a module basically for compressing files */
/* Transform string , it takes an input
may be from the readstring and then when it recieves
that data it manipulates that data into something
else*/
const gzip = zlib.createGzip();
const writeStream = fs.createWriteStream('./example2.txt.gz');
readStream.pipe(gzip).pipe(writeStream);
/* gzip is gonna take the chunks of data
that it is readin at a time and it is gonna 
manipulate it and compress it basically*/
const gunzip = zlib.createunGzip();
const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('uncomp.txt');
readStream.pipe(gunzip).pipe(writeStream);