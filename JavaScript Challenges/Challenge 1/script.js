console.log('I am linked now!');
console.log("hello");

//step2
let name= "marianne";
alert(name);

//step3
let age="20";
var lastName="pharaon";
const dob="15/8";

age="15";
lastName="fakhry";
//dob="20/5";


console.log(age);
console.log(lastName);
console.log(dob);// we cannot change the valu of a const 




//step4 

console.log(typeof "This is a text"); // string
console.log(typeof true);            // boolean
console.log(typeof false);           // boolean
console.log(typeof 1215);            // number
console.log(typeof "999");           // string
console.log(typeof {});              // object
console.log(typeof []);              // array= object 
console.log(typeof null);            // object 
console.log(typeof undefined);       // undefined


//we use "" with string declaration only
let x="abc";
let y=true;
let z=123;
let r=[2,3];
let h={k:123};
let g=null;



console.log(x, typeof x);
console.log(y,typeof y);
console.log(z,typeof z);
console.log(r,typeof r);
console.log(h,typeof h);
console.log(g,typeof g);



//step5
const myText = "Hello, world!";

const counter = 3;
const backtick = `This is my text using backticks ${counter} times`;
const singleQuote =
    'This is my text using single quotations ${counter} times';
const doubleQuote =
    "This is my text using double quotations ${counter} times";
const tryThisAlso = `This is my new version, it’s the ${2 + 3}th version`;

console.log("myText:", myText);

console.log("backtick:", backtick);
console.log("singleQuote:", singleQuote);
console.log("doubleQuote:", doubleQuote);
console.log("tryThisAlso:", tryThisAlso);


//step6
var string1 = "hello everyone";
var string2 = "Hey there";
var result;
result = string1 + " " + string2;
console.log(result);



//step7
const num = 5;
const str = "5";
const bool = true;


console.log(num === str);
console.log(num !== str);
console.log(num == str);
console.log(num != str);

console.log(num > bool);
console.log(bool >= num);
console.log(str < num);
console.log(str <= num);

let result0 = 5 + 9 * 2;
console.log(result0);

let result1 = 10 / 5 + 3;
console.log(result1);// 10/2=5 then 5+3=8

let result2 = 10 / (2 + 8);
console.log(result2);//2+3=5 then 10/5=2

