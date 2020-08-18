const sum=(num1,num2)=>num1+num2;
const PI=3.14

class SomeMathObject{
    constructor(){
        console.log('object created');

    }
}
/* we have done this so as to export more than one fumction to
to other files*/
module.exports.sum = sum;
/* exports this sum to other files */
/* We can export multiple things in the following manner*/
module.exports ={PI: PI , SomeMathObject: SomeMathObject};
/*We'll get same  result */

