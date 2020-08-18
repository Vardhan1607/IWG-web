const readline = require('readline');
const { RSA_X931_PADDING } = require('constants');
const rl = readline.createInterface({input:process.stdin,
                                    output:process.stdout});
let num1 = Math.floor((Math.random()*10)+1);
let num2 = Math.floor((Math.random()*10)+1);
/* Creating two random number between 1 and 10 */
let ans = num1+ num2;
/*question is a funtion provided to us which takes a string
and a function*/
rl.question(`What is ${num1}+${num2}? \n`,
(userInput)=>{
/*If we dont write anything after this we , the program is
still in the same interface so we have close our readline 
we do the following */
    if (userInput.trim() == ans){
        rl.close();}

    else{
        //We first set the prompt then call the prompt
        rl.setPrompt('Incorrect!\nPlease Try again');
        rl.prompt();
        rl.on('line',(userInput)=>{
            if(userInput.trim()==ans)
                rl.close();
            /*By doing so its going into a loop which will cont.
            be executed till user enters correct anser*/
            else{
                rl.setPrompt("Incorrect!\nPlease Try again\n");
                rl.prompt();
            }
        })
    }
    });
/*The below listener tells whether we have come out of 
the readline interface*/
rl.on('close',()=>{
    console.log('Correct!');
})

