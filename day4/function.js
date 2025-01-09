// //function with out parametres// //
// function demo(){
//     console.log("function is working");
// }
// demo();

// //function with parameters and argumets
// 5,6
// 8,9
// 3,4

// function add(a,b){
//     console.log(a+b);
// }
// add(5,6);
// add(8,9);
// add(3,4);

// //named function// //
// function test(){
//     console.log("named function");
// }
// test();

// //anonymous function// //
// var test = function(){
//     console.log("anonymous function");
// }
// test();
// //function expression// //
// var test = function(){
//     console.log("function expression");
// }
// test();


// //iife function// //
// (function(){
//     console.log("iife function");
// })();

// //arrow function// // 
// var test = ()=>{
//     console.log("arrow function");
// }
// test();

// var test = (a,b)=> console.log(a+b);
// test(5,6);

// var test = (a,b)=> a+b;
// console.log(test(5,6));

// //implicit return and explicit return   // //
function test(a,b){
    return a+b;
}
console.log(test(4,5));

var test = (a,b)=> a+b;
console.log(test(4,5));

let y = (a,b)=> a+b;
console.log(y(10,100));



