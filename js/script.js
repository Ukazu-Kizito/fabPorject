// Variables

// var
// let 
// const

var student = "Peter";
console.log(student);

let student1 = "John";
student1 = "Lilian";
console.log(student1);

// camel case
let studentPositionOfStudent = 50;

// snake case

let student_position = 100;

/* 
multi-line comment


*/

// DATA TYPES

// STRING
let stri = typeof("I am a developer");
console.log(stri);

// Number
let num = typeof(40);
console.log(num);

// boolean
let bol = true;
console.log(bol);

// null
let nu = null;
console.log(nu);

// undefineded

let empty;
console.log(empty);



// alert ("i love you");

// OPERATORS

// Aritmetic operators
// addition
// substraction
// division
// multiplication
// modulus

// let num1 = 40;
// let num2 = 60;

// let total = num1 % num2;
// console.log(total);

// assignment operators
// =
// +=
// -=
// *=

let num1 = 40;
let num2 = 60;

num1 *= num2;
console.log(num1);

// comparison
// ==
// ===
// <
// <=
// >=
// !=

let com = 70;
let com2 = 70;

let compare = com != com2;
console.log(compare);

// logical operators

// ||
// &&

let log1 = 50;
let log2 = 60;

// let logTot = log1 == 40 || log2 == 60;
// console.log(logTot);
let logTot = log1 == 50 && log2 == 60;
console.log(logTot);


// string method

// length

let program = "Javascript is interesting";

console.log(program.length);

// replace

console.log(program.replace('Javascript', 'Python'));

// indexOf

console.log(program.indexOf('J'));

// console.log(program.trim(program.length));


// Array

let arr1 = ['Mike', 'John', 'Lilian', 'Philip', 50];
console.log(arr1[0]);

arr1[1] = "Jude";

// ARRAY METHOD

arr1.push('Wisdom');
console.log(arr1);

// pop
arr1.pop();


// unshift
arr1.unshift('')

// shift

// Control flow statement

let password = 12345;
let username = 'Mike';

if(password == 12345 || username == 'Mike'){
    console.log('Successfully logged in');
}else if(password != 12345){
    console.log('Password incorrect');
}else if(username != 'Mike'){
    console.log('Username incorrect');
}else{
    console.log('Password and username incorrect');
}


// switch

let city = 'Owerri';

switch(city){
    case 'Owerri':
        console.log('Yes, its owerri');
        break;
    case 'Abuja':
        console.log('yES. ITS Abj');
        break;
    case "PH":
        console.log('its ph');
        break;
}


// function

function addnum(){
    let num1 = 40;
    let num2 = 60;
    let total = num1 + num2;
    return total;
}

console.log(addnum());


// parameter

function addnum2(num1, num2, num3){
    let total = num1 + num2 + num3;
    return total;
}


console.log(addnum2(30, 80, 50));





console.log(addnum2(70,60));



// DATE

let date = new Date().getMonth()
console.log(date);


// LOOP

// for loop --- initialization, condition and increment

for(let i = 1; i <= 10; i++){
    console.log(i);
}


let y = 0;

while(y < 10){
    console.log();
    y++
}













I




