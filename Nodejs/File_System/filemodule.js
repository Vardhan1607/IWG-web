/*Discussion on file system module*/
/* File system allows us to creat files, read files
delete files, create folders*/
const fs = require('fs');
//create a file
//A third argument(callback fn) is added so as to check the errors
fs.writeFile('example.txt',"This is an example file",(err)=>{
    if(err)
    console.log(err);
    else{
    console.log('File succesfully read');
    fs.readFile('example.txt','utf-8',(err,file)=>{
    //utf-8 is the encoding type
        if(err)
        console.log(err);
        else
        console.log(file);
    });
    }
});
//Renames the file
fs.rename('example.txt','example2.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('Successfully renamed');
})
//Appends to the file
fs.appendFile('example2.txt','Some data being appended',(err)=>{
    if(err)
    console.log(err);
    else
    console.log('Successfully appended');
})
fs.unlink('example2.txt',(err)=>{
    if(err)
        console.log(err);
    else
    console.log('Succesfully deleted the file');
})
