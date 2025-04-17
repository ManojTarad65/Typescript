let age:number=12;
console.log(age);

let Name:string="manoj";
console.log(Name);

let data:any ;
data="manoj";

let input:unknown="hello";
if(typeof input==="string"){  
    console.log(input.toUpperCase());
}

let nothing:null=null;
let nordefined:undefined=undefined;

function abcd()  :void {
    console.log("no return a value");
}

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

function abcde():string | number {
return "hello manoj, you aree 22 years old"
}

