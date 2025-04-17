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
console.log(greet("Manoj")); //hello, Manoj!

// void -> does not return a value 
function logMessage(message:string) : void{
    console.log(logMessage);
}

//optional parameters -> users choice , if they dont want to share this and it like , its a optional choice .
function welcome (name:string, age:number, gender?:string) {
}
welcome("Manoj", 22);

//Rest paramters -> you are not sure how many arguments you'll get.  example -> ...Numbers 
function sum1( ...numbers1: number[]) : number {
    return numbers1.reduce((acc, curr ) => acc + curr,0);
}
console.log(sum1(1,2,3,4,5));

// Function Type Annotations
let multiply:(x:number, y:number)=>number;
multiply = function (a,b){
   return a*b;
}
console.log(multiply(5,3));

//Function Overloading -> define multiple function signatures 
function display(id: string): string;
function display(id:number) : string;
    function display(id: any) : string{
        return ` ID ${id}`;
    }
console.log(display(123));
console.log(display("Employee123"));

//callback function ->  
function fetchdata(callback:(data:string) => void){
    callback("data Received");
}
console.log(fetchdata);

//real world  handling a login function 
function login(name:string, passward:string): boolean{
    return username === "admin" && passward ==="1234";
} 
console.log(login("admin", "1234"));//true 
console.log(login("manoj" , "1234"));//false

//creating a function named RegisterUser
function RegisterUser( name:string, email:string , age?:number, ){
    return `${name} (${age}) registered with email ${email}`;
}

//Type Alias  -> help define the structure of data
// A type is used to give a name to any type 
type user1={
    name:string,
    age:number,
}
const user2: user1={
    name:"manoj",
    age:22
}

//Interface -> used specifically  for objects and we can extend it  with other interface
interface user2{
    name:string,
    age:number,
}
const user3: user2={
    name:"manoj",
    age:22
}

// Extending a type
type animal ={name:string};
type dog=animal & {breed:string};
const mydog : dog ={
    name:"tommy",
    breed:"labrador"
}

//extending a interface
interface person1{
    name:string,
}
interface employee extends person1{
    salary:number;
}
const emp: employee ={
    name:"manoj",
    salary:22
}

//real world use case : API Response 
interface ApiResponse{
    status:number;
    message:string;
    data:any;
}
function handleResponse( res: ApiResponse){
    console.log(res.status, res.message);
}

// mini practice :
type blogPost ={
    title:string;
    content:string;
    tags:string;
    likes:number;
}
const Post:blogPost ={
    title:"hello world",
    content:"welcome to NowHere",
    tags:"N!",
    likes:40000
}
