"use strict";
//basics of types 
//numbers
let age = 12;
console.log(age);
//string
let Name = "manoj";
console.log(Name);
//any
let data;
data = "manoj";
//unknown
let input = "hello";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}
//null
let nothing = null;
let nordefined = undefined;
//void
function abcd() {
    console.log("no return a value");
}
// creating object in  typescript  
let person = {
    name: "manoj",
    age: 18
};
//Type Inference (No need to explicitly declare types always)
let city;
// city=123;
//Type Annotation
let username = "manojtarad65";
//Type Assertion
let somevalue = "i am a string";
let strvalue = somevalue.length;
//using a function to return a string or number
function abcde() {
    return "hello manoj, you aree 22 years old";
}
//arrays in typescript
let arr = [1, 2, 3, 4, 5];
let arr1 = ["manoj", "tarad"];
let fruits = ["apple", "banana"];
//example of typescript
let marks = [100, 90, 80];
let students = ["Manoj", "Devesh"];
marks.push(100);
students.push("Devesh");
// readonly is used for only read the data , we cannot modified the data 
let colors = ["red", "green", "blue"];
// color.push("yellow"); -> we cannot modified and use the data 
//tuples -> it is  a type of array in which we must declare  the type and and number of elements 
let person1 = ["manoj", 23];
//example of tuples 
let userInfo = ["manoj ", true, 23];
console.log(userInfo[0]); //manoj 
// Tuple with Rest Elements
let day = ["day0", 1, 2, 3, 4];
//arrays creating in functions 
function sum(numbers) {
    return numbers.reduce((a, b) => a + b);
}
//declaring a tuple to store:
let book = ["atomic habbit", 205, true];
console.log(`Title: ${book[0]}`);
console.log(`Pages: ${book[1]}`);
console.log(`Available: ${book[2] ? "Yes" : "No"}`);
//Enum ->is a way to defined a set of named constant  , set like (status , conditions , roles , direactions)
var direactions;
(function (direactions) {
    direactions[direactions["west"] = 0] = "west";
    direactions[direactions["south"] = 1] = "south";
    direactions[direactions["east"] = 2] = "east";
    direactions[direactions["north"] = 3] = "north";
})(direactions || (direactions = {}));
let move = direactions.north;
console.log(move);
//example of enum 
var weatherConditions;
(function (weatherConditions) {
    weatherConditions[weatherConditions["rainy"] = 0] = "rainy";
    weatherConditions[weatherConditions["sunny"] = 1] = "sunny";
    weatherConditions[weatherConditions["cloudy"] = 2] = "cloudy";
})(weatherConditions || (weatherConditions = {}));
console.log(weatherConditions.rainy);
//Functions in TypeScript -> defined types for parameter and return values, ensuring code safety and better coding
//basic syntax of funcations 
function greet(name) {
    return 'hello, ${name} !';
}
console.log(greet("Manoj"));
