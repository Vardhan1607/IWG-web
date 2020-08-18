const tutorial = require('./tutorial.js');
/*exports me this file */
console.log(tutorial);
/*
When we run the above code, the following is returned
{
  sum: [Function: sum],
  PI: 3.14,
  SomeMathObject: [Function: SomeMathObject]
}
*/
/* Does the work as assigned in other file */
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());