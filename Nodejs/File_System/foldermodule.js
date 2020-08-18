const fs=require('fs');
//mkdir=>make directory
fs.mkdir('tutorial',(err)=>{
    if(err)
    console.log(err);
    else{
        frmdir('tutorial',(err)=>{
            if(err)
            console.log(err);
            else{
               fs.writeFile('./tutorial/example.txt','12345',(err)=>{
                   if(err)
                   console.log(err)
                   else
                   console.log('Succesfully created file');
               })
            }
        })
    }
});
fs.unlink('./tutorial/example.txt',(err)=>{
    if(err)
    console.log(err);
    else{
        fs.rmdir('tutorial',err=>{
            if(err)
            console.log(err)
            else{
                console.log('Deleted');
            }
        })
    }
})
//We will get an error when we do this
//As the dir which we are deleting must be empty
/*fs.rmdir('tutorial',err=>{
    if(err)
    console.log(err)
    else{
        console.log('Deleted');
    }
})*/
fs.readdir('example',(err,files)=>{
    if(err)
    console.log(err);
    else
    console.log(files);
    for(let file of files){
        fs.unlink('./example/'+ file,(err)=>{
            if(err)
            console.log(err);
            else
            console.log('Successfully Deleted File');
        })
    }
})