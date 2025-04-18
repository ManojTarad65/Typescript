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
// Type Narrowing -> whenever our codes accpt multiple types or works with unknown data, we need to "narrow down" the exact type before performing operations.

//When a variable can have multiple types, use typeof to narrow it:
function printID(id: number | string){
    if(typeof id==="string"){
    console.log("Uppercased ID:", id.toUpperCase());
    }
    else {
        console.log("formatted ID:", id.toFixed(2));
    }
}
printID("user_1");
printID(12.345);

//You can use the in keyword to check if a property exists.
type user4 ={name:string , email:string};
type Guest={name:string};

    function getUserInfo (user:user4 | Guest){
        if("email" in user){
            console.log("logged-in user:", user.email);
        }
        else {
            console.log("Guest user:" , user.name);
        }
    }

//Type Narrowing with instanceof -> used when dealing with classes
class car{
    drive (){
        console.log("driving a car ...");
    }
}
class Truck{
    loadCargo(){
        console.log("loading a cargo...");
    }
}

function useVehicle(vehicle: car | Truck){
    if(vehicle instanceof Truck){
        vehicle.loadCargo();
    }else {
        vehicle.drive();
    }
}

// Custom Type Guards (Important for real-world)
type admin={role:"admin"; access:string[]};
type Member ={role:"member";subscription: string};

function isAdmin (user:admin | Member): user is admin{
        return user.role==="admin";
}
function getAccess(user: admin | Member){
    if(isAdmin(user)){
        console.log("Admin Access :" , user.access);
    } else{
        console.log("Member plan:" , user.subscription);
    }
}

//type assertions (as)
// let input = document.getElementById("email") as HTMLInputElement;
// console.log(input.value); -> typescript won't validate it!



 //Classes & OOP in TypeScript -> Great for building reusable components, data models, and service layers.
 class person3{
    constructor(protected name:string, public age:number){
    }
    greet(){
        console.log(`Hello, ${this.name}!`);
     
     }
 }
const manoj= new person3("manoj", 22);
manoj.greet();

//Inheritance -> allows a class to inherit properties and methods from another class
class animal1{
    constructor(protected name:string){
    }
    makeNoise(){
        console.log(`noise of : ${this.name}`);
    }
}
class dog1 extends animal1 {
    bark(){
        console.log(`${this.name} : says woof`);
    }
}
const dog2= new dog1("tommu");
dog2.makeNoise();// noise of tommu
dog2.bark();// tommu: says woof

//getters and setters -> used to access and modify private properties





//Generics in TypeScript ->
                         //Without Generics: You either lose type safety with any, or you repeat code for each type.
                        //With Generics: One reusable function/class works with many types!

function identity<T>(value: T) : T{
    return value;
}
console.log(identity<string>("manoj"));
console.log(identity<number>(123));
console.log(identity<boolean>(true));

//Type Inference with Generics ->You can omit the type — TypeScript will infer it:
 const result = identity("Typescript");
 console.log(result);

 //Generic Arrays
function firstElement<T>(arr:T[]):T{
    return arr[0];
}
console.log(firstElement<number>([1,2,3]));  //1
console.log(firstElement<string>(["a","b","c"]));  //a
 
// Multiple Type Parameters
function merge<T, U>(obj1: T, obj2: U): T & U {
    return {...obj1, ...obj2};
  }
  const merged = merge({name: "Manoj"}, {age: 21});
  console.log(merged); // {name: 'Manoj', age: 21}


  //Generics in Interfaces ->
  interface ApiResponse1<T>{
    status:number;
    data:T;
  }
  const userResponse : ApiResponse1<{name:string, age:number}> = {
            status:200,
            data:{
                name:"manoj",
                age:22,
            }
        }


//Utility Types in TypeScript ->They are built-in generic types that help you transform, extend, or restrict types easily.They're super useful in form validation, API response shaping, frontend props management, and more.

//1.Readonly -> makes all properties readonly
interface User{
    name:string;
    age:number;
}
const readOnlyUser: Readonly<User> = {name:"manoj", age:22};


//2. Partial<T> -> Makes all properties optional.
interface User{
    name:string;
    age:number;
  }
  const updateUser = (user: Partial<User>)=> {
    console.log(user);
  }
  updateUser({ name: "Manoj" });
  updateUser({ age: 21 });

//3. Required<T> -> Makes all properties required.
interface User {
    name: string;
    age: number;
  }
  const updateUser1=(user: Required<User>)=> {
    console.log(user);
  };
  updateUser1({name: "Manoj", age: 21});

//4. Pick<T, K> -> Pick only specific keys from a type.
interface User{
    name:string;
    age:number;
  }
  const updateUser2 =(user: Pick<User, "name"|"age">) => {
    console.log(user);
  };
  updateUser2({name: "Manoj", age: 21});

//5. Omit<T, K> -> Omit specific keys from a type.
interface User{
    name:string;
    age:number;
  }
  const updateUser3 =(user: Omit<User, "name" | "age">) => {
    console.log(user);
  };
  updateUser3({});


//6. Record<T, K> -> Creates a type with keys of type K and values of type T.
type Roles = "admin" | "user" | "guest";
type RolePermissions = Record<Roles, string[]>;

const permissions: RolePermissions = {
  admin: ["create", "delete", "update"],
  user: ["read", "comment"],
  guest: ["read"],
};
