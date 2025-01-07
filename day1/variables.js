// console.log("start")
// //global scope
// var a = 10;
// console.log(a);

// //local scope
// let b = 20;
// console.log(b);

// const c = 30
// console.log(c);

// console.log("end")

// //block
// {
//     var m = 100;
//     console.log(m)

//     let f = 200;
//     f = 4000;
//     console.log(f)
     
//     const o = 300;
//     console.log(o);
// }

// function demo() {
//     var username = "Sasank";
//     let city = "Vij";
//     const salary = 12345678;
//     console.log(username , city , salary);
// }
// demo();
 


//////////////////////////////Data Types(primitive)//////////////////////////////


// let str1 = "double quotes";
// console.log(str1,typeof(str1));
// let str2 = 'single quotes';
// console.log(str2,typeof(str2));
// let str3 = `template literals`;
// console.log(str3,typeof(str3));

// let bool1 = true;
// console.log(bool1, typeof(true));

// let bool2 = false;
// console.log(bool2,typeof(bool2));


// let num1 = 10;
// console.log(num1,typeof(num1));

// let num3 = 10e44;
// console.log(num3 ,typeof(num3));

// let a;
// console.log(a);

// let x = null;
// console.log(x,typeof(x));



//////////////////////////////Data Types(Non-primitive)//////////////////////////////


// console.log(5+5);
// console.log(10+"10");//concatenation
// console.log(10+"hi");
// console.log("hi"+10+40);
// console.log("hi"+(10+40));//bodamas rule

// console.log(10-5);
// console.log("10"-5);//typecasting

// console.log(10*"5");
// console.log(10*5);

// console.log(10/5);
// console.log("10"/5);

// console.log(10**5);
// console.log(10**"5");

// console.log(10%5);
// console.log("10"%5);

// //increment

// let a = 10;
// // console.log(a++);
// // console.log(a);
// console.log(++a);   
// console.log(a);

// //decrement
// let b = 10;
// // console.log(b--);
// // console.log(b);
// console.log(--b);
// console.log(b);

// //assignment
// let c = 10;
// c += 5;
// console.log(c);

// let d = 10;
// d -= 5;
// console.log(d);

// let e = 10;
// e *= 5;
// console.log(e);

// let f = 10;
// f /= 5;
// console.log(f);

// let g = 10;
// g %= 5;
// console.log(g);

// let h = 10;
// h **= 5;
// console.log(h);

// //comparison
// let i = 10;
// let j = 10;
// console.log(i == j);

// let k = 10;
// let l = "10";
// console.log(k == l);

// let m = 10;
// let n = 10;
// console.log(m === n);

// let o = 10;
// let p = "10";
// console.log(o === p);

// let q = 10;
// let r = 5;
// console.log(q != r);

// let s = 10;
// let t = "10";
// console.log(s != t);

// let u = 10;
// let v = 10;
// console.log(u !== v);

// let w = 10;
// let x = "10";
// console.log(w !== x);

// let y = 10;
// let z = 5;
// console.log(y > z);

// let aa = 10;
// let ab = 5;
// console.log(aa < ab);

// //logical

// let ac = true;
// let ad = true;
// console.log(ac && ad);

// let ag = true;
// let ah = false;
// console.log(ag || ah);

// let am = true;
// let an = false;
// console.log(!am);

// //ifelse//
// let isadult = 20;
// if(isadult >= 18){
//     console.log("eligible");
// }else{
//     console.log("not eligible");
// }

//ifelse if//
// let day = 6;
// if(day == 1){
//     console.log("Sunday");
// }else if(day == 2){
//     console.log("Monday");
// }else if(day == 3){
//     console.log("Tuesday");
// }else if(day == 4){
//     console.log("Wednesday");
// }else if(day == 5){
//     console.log("Thursday");  
// }else if(day == 6){
//     console.log("Friday");
// }else if(day == 7){
//     console.log("Saturday");
// }else{
//     console.log("Invalid day");
// }

//switch case
let day = 5;
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
        break;
}

//write a program to check greatest number among 3 numbers
let a = 20;
let b = 30;
let c = 40;
if(a > b && a > c){
    console.log("a is greatest");
}else if(b > a && b > c){
    console.log("b is greatest");
}
else{
    console.log("c is greatest");
}

//do while
let i = 1;
do{
    console.log(i);
    i++;
}
while(i <= 10);

//while
let j = 1;
while(j <= 10){
    console.log(j);
    j++;
}

//for
for(let i = 1; i <= 10; i++){
    console.log(i);
}

//for of
let arr = [10,20,30,40,50];
for(let val of arr){
    console.log(val);
}

//for in
let obj = {name:"Sasank",city:"Vij",salary:123456};
for(let key in obj){
    console.log(key,obj[key]);
}

//break
for(let i = 1; i <= 10; i++){
    if(i == 5){
        break;
    }
    console.log(i);
}

//continue
for(let i = 1; i <= 10; i++){
    if(i == 5){
        continue;
    }
    console.log(i);
}

//functions
function greet(){
    console.log("Hello");
}
greet();

function add(a,b){
    return a+b;
}
console.log(add(10,20));

function sub(a,b){
    return a-b;
}
console.log(sub(20,10));

function mul(a,b){
    return a*b;
}
console.log(mul(10,20));

function div(a,b){
    return a/b;
}
console.log(div(20,10));

//for loop
function table(num){
    for(let i = 1; i <= 10; i++){
        console.log(num*i);
    }
}
table(5);
