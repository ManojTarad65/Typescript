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
console.log(greet("Manoj")); //hello, Manoj!
// void -> does not return a value 
function logMessage(message) {
    console.log(logMessage);
}
//optional parameters -> users choice , if they dont want to share this and it like , its a optional choice .
function welcome(name, age, gender) {
}
welcome("Manoj", 22);
//Rest paramters -> you are not sure how many arguments you'll get.  example -> ...Numbers 
function sum1(...numbers1) {
    return numbers1.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum1(1, 2, 3, 4, 5));
// Function Type Annotations
let multiply;
multiply = function (a, b) {
    return a * b;
};
console.log(multiply(5, 3));
function display(id) {
    return ` ID ${id}`;
}
console.log(display(123));
console.log(display("Employee123"));
//callback function ->  
function fetchdata(callback) {
    callback("data Received");
}
console.log(fetchdata);
//real world  handling a login function 
function login(name, passward) {
    return username === "admin" && passward === "1234";
}
console.log(login("admin", "1234")); //true 
console.log(login("manoj", "1234")); //false
//creating a function named RegisterUser
function RegisterUser(name, email, age) {
    return `${name} (${age}) registered with email ${email}`;
}
const user2 = {
    name: "manoj",
    age: 22
};
const user3 = {
    name: "manoj",
    age: 22
};
const mydog = {
    name: "tommy",
    breed: "labrador"
};
const emp = {
    name: "manoj",
    salary: 22
};
function handleResponse(res) {
    console.log(res.status, res.message);
}
const Post = {
    title: "hello world",
    content: "welcome to NowHere",
    tags: "N!",
    likes: 40000
};
// Type Narrowing -> whenever our codes accpt multiple types or works with unknown data, we need to "narrow down" the exact type before performing operations.
//When a variable can have multiple types, use typeof to narrow it:
function printID(id) {
    if (typeof id === "string") {
        console.log("Uppercased ID:", id.toUpperCase());
    }
    else {
        console.log("formatted ID:", id.toFixed(2));
    }
}
printID("user_1");
printID(12.345);
function getUserInfo(user) {
    if ("email" in user) {
        console.log("logged-in user:", user.email);
    }
    else {
        console.log("Guest user:", user.name);
    }
}
//Type Narrowing with instanceof -> used when dealing with classes
class car {
    drive() {
        console.log("driving a car ...");
    }
}
class Truck {
    loadCargo() {
        console.log("loading a cargo...");
    }
}
function useVehicle(vehicle) {
    if (vehicle instanceof Truck) {
        vehicle.loadCargo();
    }
    else {
        vehicle.drive();
    }
}
function isAdmin(user) {
    return user.role === "admin";
}
function getAccess(user) {
    if (isAdmin(user)) {
        console.log("Admin Access :", user.access);
    }
    else {
        console.log("Member plan:", user.subscription);
    }
}
//type assertions (as)
// let input = document.getElementById("email") as HTMLInputElement;
// console.log(input.value); -> typescript won't validate it!
//Classes & OOP in TypeScript -> Great for building reusable components, data models, and service layers.
class person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
}
const manoj = new person3("manoj", 22);
manoj.greet();
//Inheritance -> allows a class to inherit properties and methods from another class
class animal1 {
    constructor(name) {
        this.name = name;
    }
    makeNoise() {
        console.log(`noise of : ${this.name}`);
    }
}
class dog1 extends animal1 {
    bark() {
        console.log(`${this.name} : says woof`);
    }
}
const dog2 = new dog1("tommu");
dog2.makeNoise(); // noise of tommu
dog2.bark(); // tommu: says woof
//getters and setters -> used to access and modify private properties
//Generics in TypeScript ->
//Without Generics: You either lose type safety with any, or you repeat code for each type.
//With Generics: One reusable function/class works with many types!
function identity(value) {
    return value;
}
console.log(identity("manoj"));
console.log(identity(123));
console.log(identity(true));
//Type Inference with Generics ->You can omit the type — TypeScript will infer it:
const result = identity("Typescript");
console.log(result);
//Generic Arrays
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3])); //1
console.log(firstElement(["a", "b", "c"])); //a
// Multiple Type Parameters
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const merged = merge({ name: "Manoj" }, { age: 21 });
console.log(merged); // {name: 'Manoj', age: 21}
const userResponse = {
    status: 200,
    data: {
        name: "manoj",
        age: 22,
    }
};
const readOnlyUser = { name: "manoj", age: 22 };
const updateUser = (user) => {
    console.log(user);
};
updateUser({ name: "Manoj" });
updateUser({ age: 21 });
const updateUser1 = (user) => {
    console.log(user);
};
updateUser1({ name: "Manoj", age: 21 });
const updateUser2 = (user) => {
    console.log(user);
};
updateUser2({ name: "Manoj", age: 21 });
const updateUser3 = (user) => {
    console.log(user);
};
updateUser3({});
const permissions = {
    admin: ["create", "delete", "update"],
    user: ["read", "comment"],
    guest: ["read"],
};
