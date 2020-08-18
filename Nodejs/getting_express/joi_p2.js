const Joi= require('joi');
const arrayString =['apple','ban','pine'];
const arrayObjects = [{example:'example1'},{example:'example2'}]
const userInput={personalInfo:{
    streetAddress:'123987987',
    city:'xyz',
    state:'ab',
    },
    prefrences: arrayString};
/*We will develop a schema for pref and personalInfo */
const personalInfoSchema = Joi.object().keys({
    streetAddress : Joi.string().trim().required(),
    city : Joi.string().trim().required(),
    state : Joi.string().trim().length(2),required()
});
const prefrencesSchema = Joi.array().items(Joi.string());
const schema = Joi.object().keys({
    personalInfo:  personalInfoSchema,
    prefrences: prefrencesSchema
});
Joi.ValidationError(userInput,schema,(err,result)=>{
    if(err)
    console.log(err)
    else
    console.log(result);
})
/* If we are give a complicated object, break them into their
individual schema and then combine them 
If we want an array of obejects instead of string 
we change our preferences to arrayObjects in line 9
 and in line 16 we change it to Joi.objects().keys({
example:Joi.string().required()
 }) */