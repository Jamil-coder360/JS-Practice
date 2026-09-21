//task 01
function print() {
    console.log("Md Nahid Hasan Jamil");
    console.log("Md Nahid Hasan Jamil");
    console.log("Md Nahid Hasan Jamil");
}
print();
 //task 02
// function multiply(num1 , num2) {
//     return  num1,num2 * 2;
// }
// print(multiply(5, 10));
// console.log(multiply(5,10));
// console.log(multiply(10));


// function multiply(num){
//     return num * 2;
// }
// console.log(multiply(5));
// function multiply(num1 , num2){
//     return{
//         return1: num1 * 2,
//         return2: num2 * 5
//     }
// }
// console.log(multiply(5,10));
//task 03
function printWelcome() {
  for (let i = 0; i < 3; i++) {
    console.log("Welcome to JavaScript")
  }
}
printWelcome();
//task 04 and 05
// function add(a , b){
//  return a+b;
// }
//  console.log(add(5,10));
//  const subtract = function(a , b){
//     return a - b;
//  }
//  console.log (subtract(19,9));
 //expression function faced problem when calling before declaration
//task 06
function great(name){
  return "Hello " + "name"  ;
}
console.log(great())
//task 07
function multiply(num1 , num2 ,num3){
  return num1 * num2* num3;
}
console.log(multiply(5,7,9));
//task 08
function fullname(firstname , lastname){
  return "fullname:"+firstname + " " + lastname;
}
console.log(fullname("Md Nahid","Hasan Jamil"))
//task09
function double(x){
  return x * 2;
}
console.log(double(3));
//task 10
function evenorodd(num){
  if(num % 2 == 0){
    return "even";
  }
  else{
    return "odd";
  }
}
console.log(evenorodd(13));
//task 12
function outside() {
    let inside = "wellcome to javascript";
    console.log(inside);
}

outside();
// console.log(inside); defined variable dose'nt work outside the function //
//task 13
let name = "Global Name";

function showName() {
    let name = "Local Name";
    console.log(name); 
}

showName();
console.log(name); 
//task 14
const square = (x) => x * x;
console.log(square(55));
//task 15
const imp = () =>{
    return "JS is awesome";
}
console.log(imp()); // with peramitter

const imp2 = () => "JS is awesome";//without peramiter
console.log(imp2());
// task16
const area = (width, height) => width * height;
console.log(area(5, 10));
// task 17
function toUpper(name) {
    return name.toUpperCase();
}

function welcome(name) {
    const upperName = toUpper(name);
    console.log("Welcome, " + upperName);
}

welcome("Jamil");
//task 18
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function main(arr) {
    return {
        max: findMax(arr),
        min: findMin(arr)
    };
}

console.log(main([4, 7, 1, 9, 2]));
//task 19
function convertCases(str) {
    return {
        upper: str.toUpperCase(),
        lower: str.toLowerCase()
    };
}

console.log(convertCases("JavaScript"));
//task 20
function randomOneToTen() {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(randomOneToTen());
