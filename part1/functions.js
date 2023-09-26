//functions
//function declaration
function walk(){
    console.log('walk');
}

//function expression
let run = function(){
    console.log('run');
}

//named function expression
let run2 = function walk(){
    console.log('run2');
}
run2();
//hoisting
//function declaration can be called before the declaration
//move all the function declarations to the top of the file

//arguments
function sum(a,b){
    return a+b;
}
console.log(sum(1,2,3,4,5));

//rest operator
function sum2(...args){
    console.log(args);
}
console.log(sum2(1,2,3,4,5));

//using rest operator with reduce 
function sum3(...args){
    return args.reduce((a,b) => a+b);
}
//rest operator should be the last parameter
function sum4(discount, ...prices){
    const total = prices.reduce((a,b) => a+b);
    return total * (1-discount);
}

//default parameters
function interest(principal, rate = 3.5, years = 5){
    return principal * rate / 100 * years;
}

console.log(interest(10000));

//getters and setters
const person1 = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    //adding a function inside the object without the function keyword
    get fullName(){
        return `${person1.firstName} ${person1.lastName}`;
    },
    //setters
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person1.fullName);
person1.fullName = 'John Smith';
console.log(person1);
console.log(person1.firstName);

//try and catch
// const person2 = {
//     firstName: 'Mosh',
//     lastName: 'Hamedani',
//     //defensive programming
//     set fullName(value){
//         if(typeof value !== 'string')
//             throw new Error('Value is not a string.');

//         const parts = value.split(' ');
//         if(parts.length !== 2)
//             throw new Error('Enter a first and last name.');

//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// try{
//     person2.fullName = '';
// }
// catch(e){
//     alert(e);
// }

//local vs global scope
const color = 'red'; //global scope
function start(){
    const message = 'hi';
    const color = 'blue';
    console.log(color);
}
function stop(){
    const message = 'bye';
}
start();
stop();
//let vs var
var color2 = 'red'; //function scope
let age = 30; //block scope

//this keyword
const video = {
    title: 'a',
    play(){
        console.log(this);
    }
};

video.stop = function(){
    console.log(this);
}

video.play();

function playVideo(){
    console.log(this);
}

playVideo();

//using constructor function
function Video(title){
    this.title = title;
    console.log(this);
}

const v = new Video('b');

const video2 = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }, this);
    }
};

video2.showTags();

//changing this
