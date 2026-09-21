// function multiple(num1:number , num2:string ) {
//     return   [num1*3,num2];
// }
// // print(multiply(5, 10));
// console.log(multiple(5,"10"));
// console.log(multiple(10,"luck"));
// const names:string = "nahid";
// const ages:number = 10;
// const agesmonth:ConstrainDouble = 10.22;
// const bol:boolean = !true;
// const user :null = null

// console.log(names);
// console.log(ages);
// console.log(names+"  "+ages);
// console.log(agesmonth);
// console.log(bol);
// console.log(user);

// const data:unknown =10;
// //  data="hello";
//  if (typeof data === "number" ) {
//     console.log(data);
//  }

// const arr:  number[] =[12,13,14]
// arr.pop(14)
// // arr.slice(0,2)
// console.log(arr);

// const arr: readonly number[] =[12,13,14]
// arr.push(30)
// // arr.slice(0,2)
// console.log(arr);
// let arrs : [number, string ,boolean];
// arrs = [10, "nahid",true]
// console.log(arrs);
// const arrays :  [{name:string , phone : number}] = [{ "name":"nahid","phone":"013333"},{"name":"hasan","phone":"013333"}]
// console.log(arrays);

type Usertype = [{ name: string , phone : number ,active : boolean}];

const userArray :Usertype = [{
    name: "nahid",
    phone:103322,
    active: false
},
 {
    name: "jamil",
    phone:332782,
    active: true
}
,
 {
    name: "jamil",
    phone:33229,
    active: true
}
,
 {
    name: "jamil",
    phone:33202,
    active: true
}
,
 {
    name: "jamil",
    phone:22,
    active: true
}
]
const my_array=userArray.splice(0,1,{name:"nahid",phone:7830,active:!false},"nahid")
console.log(my_array);
console.log(userArray);
console.log("total count : "+userArray.length);
// console.log(userArray.toReversed(0));
// console.log(userArray.toLocaleString());
// console.log(userArray.slice(1,3));
// console.log(userArray.splice(2,2,30,38));