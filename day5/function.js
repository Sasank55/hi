// ! higher order function and callback function // //
// function hof(a){  //it is a higher order function
//     return a();
// }
// let x = hof(function(){return "I am a callback function"}); //it is a callback function
// console.log(x);

// let y = hof(function(){return "I am a callback function"});
// console.log(y());

// let users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];
// console.log(users);
// users.map((users)=>{
//     console.log(users);
// });

// users.map(function(users){console.log(users);});

// // closure function
var a = 10;
let b = 20;
function x(){
    var username = "Sasank";
    let company = "Black Rock";
    const salary = 1000000;
    console.log(username);
    console.log(salary);
    console.log(company);
    console.log(a,b);
}
x();

//write a  java script porgram to find the pattern of the given 
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

//use for loop , nested  loop , coordinate

for(let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 1; j <= 5; j++) {
        str += "* ";
    }
    console.log(str);
}


// *
// * *
// * * *
// * * * *
// * * * * *

for(let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += "* ";
    }
    console.log(str);
}
