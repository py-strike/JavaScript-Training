let js = "Salem";
// if (js === "Salem") {
//     alert("Salem Aliko");
// }

// variables and values
let firstName = "Kevin";
console.log(firstName);

// convension for writing vars is the camelCase
let PI = 3.14;
let myFisrtJob = "Teacher";
let job1 = "Programmer";

// Data Types
// Numbers,
let age = 32;
// Strings
let msg = "Hello";
// Boolean
let fullAge = true;
// Undefined
let children;
// Null
// Symbol
// BigInt

console.log(typeof 23);

// let , var , const
// let is a var that changes later
age = 33;
const city = "Skikda";
// var is the old way to declare variables

//Operations
let x = 10 + 5;
x += 4
x++;

console.log(x);

console.log(age >= 18);

// Challenge
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter). 
Your tasks: 
1. Store Mark's and John's mass and height in variables 
2. Calculate both their BMIs using the formula (you can even implement both 
versions) 
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John. 
Test data: 
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall. 
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall. 
GOOD LUCK
*/

const markHeight = 1.69;
const markMass = 78;

const JohnHeight = 1.95;
const JohnMass = 92;

let markHigherBMI;

markIBM = markMass / markHeight ** 2
johnIBM = JohnMass / JohnHeight ** 2

markHigherBMI = markIBM > johnIBM;

if (markHigherBMI) {
    console.log("Mark has heigher IBM than John");
}
else {
    console.log("John has heigher IBM than John");
}

const job = "Software Devoloper";
// strings
const myJob = "I'm a " + job;
console.log(myJob);
console.log('- ${myJob} \n');

// Taking Decisions using if
const personAge = 18;
const isOldEnough = personAge >= 18;

if (isOldEnough) {
    console.log("Can Pass the driver License 🚗");
}
else {
    console.log("Not Old enough 🛑");
}

// Type Conversion
const inputYear = "1992";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Kevin"));
console.log(String(32));

// Logical Operations
const hasDriverLincense = true;
const hasGoodVision = true;

console.log(hasDriverLincense && hasGoodVision);
console.log(hasDriverLincense || hasGoodVision);
console.log(!hasDriverLincense);

