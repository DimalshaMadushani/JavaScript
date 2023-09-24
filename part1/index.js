console.log('Hello world');

//declare a variable
let name = 'Dimalsha';
let lastName ='Madushani'
console.log(name);
 
let interestRate = 0.3;
interestRate = 12;
console.log(interestRate);

for(let i=0;i<5;i++){
    console.log('Hello world',i);
}
for(let i=1;i<=5;i++){
    if(i%2 !==0) console.log(i);
}

let i=0;
while(i<=5){
    if(i%2 !==0) console.log(i);
    i++;
}

//do while loop
let j=51;
do{
    if(j%2 !==0) console.log(j);
    j++;
}while(j<=5);

//for in loop
const person ={
    name : 'Dimalsha',
    age : 23
}

for(let key in person )
    console.log(key,person[key]);

const colors = ['red','green','blue'];

for(let index in colors){
    console.log(index,colors[index]);
}

//for of loop
//use for arrays
for(let color of colors){
    console.log(color);
}
//maximum of two numbers
function max(a,b){
    if(a>b)
        return a;
    else
        return b;
}

console.log(max(12,10));

function isLanscape(width,height){
    return (width>height);
}
console.log(isLanscape(12,2));

//fizz buzz algorithm
const output =3;
function fizzBuzz(input){
    if(typeof input != 'number') return 'not a number'
    if(input % 3 == 0 && input%5 ==0) return 'FizzBuzz';
    else if(input%3 ==0) return 'Fizz';
    else if(input%5 ==0) return 'Buzz';
    else return input;
}
console.log(fizzBuzz(8));

function checkSpeed(speed){
    let points = 0;
    if(speed <= 70 +5) return 'ok';

    else if(speed > 70 && speed % 5 == 0){
        const points = Math.floor((speed - 70))/5

        if(points > 12) return 'suspended!';
        else return points;
    }
    
}

console.log(checkSpeed(190));

function showNumbers(limnit){
    for(let i=0; i<= limnit; i++){
        if(i%2 === 0){
            console.log(i,'Even');
        } else console.log(i,'Odd');
    }
}
console.log(showNumbers(11));

const array = [0,null,undefined,'',2,3];
const falsyArray = [undefined,0,null,'',false,0,NaN];
function countTruthy(array){
    let count = 0;
    for(let item of array){
        if(item)// ifthe item is truthy ,count will be incremented 
        count++;
    }
    return count;
}

console.log(countTruthy(array));

const movie = {
    title : 'a',
    releaseyear: 2018,
    rating:4.5,
    director:'b'
};

function showProperties(obj){
    for(let key in obj)
      if (typeof obj[key] === "string")  
        console.log(key,obj[key]);
}

console.log(showProperties(movie));

function sum(limit){
    let total =0;
    for(let i = 1; i <= limit ; i++){
        if(i%3 === 0 || i%5 === 0)
            total += i;
    }
    return total;
}

console.log(sum(10));

//calculate grade
// const marks = [80,80,50];
// function  calculateGrade(marks){
//     let sum = 0;
//     for(let i of marks)
//         sum += i;
//     let avg = sum/marks(length);
//     if(avg <= 59) return 'F';
//     if(avg <= 69) return 'D';
//     if(avg <= 79) return 'C';
//     if(avg <= 89) return 'B';
//     return 'A';
// }

//console.log(calculateGrade(marks));

function showStarts(rows){
    for(let row = 1; row<= rows;row++){
        let pattern = '';
        for(let i = 1; i<= row;i++)
            pattern += '*';
        console.log(pattern);
}}

showStarts(5);

function showPrimes(limit){
    for(let i = 2; i<=limit;i++){
        let isPrime = true;
        for(let j = 2;j < i;j++){
            if(i%j == 0) 
            isPrime = false;
            break;
    }
    if(isPrime) console.log(i);
}
}
showPrimes(14);

const circle = {
    radius: 1,
    location:{x:1,y:1},
    isvisible:true,
    //methods
    draw: function(){ console.log('draw');}
};

//factory function
function createCircle(radius){
    return{
        radius,
        draw(){
            console.log('draw a circle');
        }
    };
}

const circle1 = createCircle(1);
circle1.draw();
console.log(circle1);

//constrictor function
function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle3 = new Circle(1);
console.log(circle3);

const now = new Date();
const date2 = new Date(2023,4,11,9,0);

console.log(now);

//object literal syntax
let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};


function showAddres(address){
    for(let key in address)
    console.log(key,address[key]);
}

showAddres(address);

//factory fucntion to initialize an object
function createAddress(street,city,zipCode){
    return{
        street,
        city,
        zipCode
    };
}

let a1 = createAddress('a','b','c');
console.log(address);

//constructor
function CreateAddress(street,city,zipCode){
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}

let a2 = new CreateAddress('a','b','c');
let a3 = new CreateAddress('a','b','c');
console.log(a2);

function areEqual(a2,a3){
    return a2.street === a3.street && 
           a2.city === a3.city &&
           a2.zipCode === a3.zipCode;
}

//check if two different objects
function areSame(a2,a3){
    return a2 === a3;
}

console.log(areEqual(a2,a3));
console.log(areSame(a2,a3));

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments : [{author:'a',body:'b'},{author:'a',body:'b'}],
    isLive : true
};

console.log(post);

function Post(title,body,author){
    this.title = title,
    this.body = body,
    this.author = author,
    this.views = 0,
    this.comments = [],
    this.isLive = false;
}

//arrays 
let numbers = [3,4];
numbers.push(5,6); //end
numbers.unshift(1,2); //begining
numbers.splice(2,0,'a','b'); //middle


console.log(numbers.indexOf('a'));

//finding refrence types
const courses = [
    {id: 1, name: 'd'},
    {id:2,name:'b'}
];

// this is a call back function
const course = courses.find(function(course) {
    return course.name === 'a';
});

console.log(course);

//arrow functions

//removinf elements from an array
const last = numbers.pop();
const first = numbers.shift();
console.log(last,first);

//emptying an array
numbers = [];
console.log(numbers);

//combine arrays
const a = [1,2,3];
const b = [4,5,6];

const combined = a.concat(b);

//sort an array
const nums = [2,3,1];
nums.sort();
console.log(numbers);

//sorting objects
courses.sort(function(a,b){

    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
});


console.log(courses);

//testing values, using a callback function
const allPositive = list.every(function(value) {
const list = [1,2,3];
    return value >= 0;
});
// by using some we can find few elment at least one check match the given criteria
const atLeastOnePositive = list.some(function(value){
    return value >= 0;
})
//the function return a true or false depending on the input array
console.log(allPositive);

