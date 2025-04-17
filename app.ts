//basics of types 

//numbers
let age:number=12;
console.log(age);

//string
let Name:string="manoj";
console.log(Name);

//any
let data:any ;
data="manoj";

//unknown
let input:unknown="hello";
if(typeof input==="string"){  
    console.log(input.toUpperCase());
}

//null
let nothing:null=null;
let nordefined:undefined=undefined;

//void
function abcd()  :void {
    console.log("no return a value");
}

// creating object in  typescript  
let person:object={
    name:"manoj",
    age:18
}

//Type Inference (No need to explicitly declare types always)
let city:"jaipur";
// city=123;

//Type Annotation
let username:string="manojtarad65";

//Type Assertion
let somevalue:any="i am a string";
let strvalue:number=(somevalue as string).length;

//using a function to return a string or number
function abcde():string | number {
return "hello manoj, you aree 22 years old"
}

//arrays in typescript
let arr:number[]=[1,2,3,4,5];
let arr1:string[]=["manoj","tarad"];
let fruits:Array<string>=["apple", "banana"];

//example of typescript
let marks:number[]=[100,90,80];
let students:string[]=["Manoj", "Devesh"];
marks.push(100);
students.push("Devesh");


// readonly is used for only read the data , we cannot modified the data 
let colors : readonly string[]=["red", "green", "blue"];
// color.push("yellow"); -> we cannot modified and use the data 

//tuples -> it is  a type of array in which we must declare  the type and and number of elements 
let person1: [string, number]=["manoj", 23];

//example of tuples 
let userInfo:[string, boolean, number]=["manoj ", true, 23];
console.log(userInfo[0]); //manoj 

// Tuple with Rest Elements
let day:[string, ...number[]]=["day0" , 1,2,3,4];

//arrays creating in functions 
function sum( numbers:number[]): number {
    return numbers.reduce((a,b) => a+b )
}

//declaring a tuple to store:
let book: [string,number,boolean]=["atomic habbit", 205, true] 
    console.log(`Title: ${book[0]}`);
    console.log(`Pages: ${book[1]}`);
    console.log(`Available: ${book[2] ? "Yes" : "No"}`);


//Enum ->is a way to defined a set of named constant  , set like (status , conditions , roles , direactions)

enum direactions{
    west ,
    south,
    east, 
    north
}
let move:direactions=direactions.north
console.log(move);

//example of enum 
enum weatherConditions{
    rainy,
    sunny,
    cloudy
}
console.log(weatherConditions.rainy);

//Functions in TypeScript -> defined types for parameter and return values, ensuring code safety and better coding

//basic syntax of funcations 

function greet( name:string) : string{
    return 'hello, ${name} !';
}
console.log(greet("Manoj"));
