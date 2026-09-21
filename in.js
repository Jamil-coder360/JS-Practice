let number = 10;
console.log(number);
// alert(number);
console.log("Hello World");

// object method function

const obj ={
    name: "Nahid",  //key:value == object-property
    age:21
}
obj.id=123; // dot notation
obj.Action=!false
console.log(obj);
console.log(obj["id"]); //Array Notation
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.values(obj)[3]);

// for loop
// for(initialValue, Condition ,incriment / decrement){

// }
for (let i = 0 ; i<4 ; i++) {
    console.log("Hello World"+"       "+i);  
    // if (i<=4) {
    //     console.log("complete counting");
        
    // }
}
const multiply =( num1 , num2)=>{
return [(num1*2),(num2*2)];
}
console.log(multiply(5,2));

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

console.log(main([4, 7, 1, 9, 2,0]));

