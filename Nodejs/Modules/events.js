const EventEmitter =require('events');
const eventEmitter = new EventEmitter();
/*The second part of the function tells us what is to be executed
when the event is carried out*/

eventEmitter.on('tutorial',()=>{
    console.log('tutorial event occuried');
});
eventEmitter.emit('tutorial');
class Person extends EvenEmitter{
    constructor(name){
        super();
        this._name=name;

    }
    get name(){
        return this._name;
    }
}
let x = new Person('X');
let y = new Person('Y')
/* When we say new Person , Person extends the emitter class
x is also an instance of the event emitter class */
x.on('name',()=>{
    console.log('my name is '+x.name)
})
x.emit('name');
y.on('name',()=>{
    console.log('my name is '+y.name)
})
y.emit('name');
/* Key Takeaway: They get emitted synchronously */