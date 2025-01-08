// for(let i=1;i<5;i++){
//     console.log("javascript");
// }

// for(let i=1;i<=1;i++){
//     console.log(i);
// }

//write a program to print 1 to 100 numbers using for loop and print the numbers is odd or even
for(let i=1;i<=100;i++){
    if(i%2==0){
        console.log(i+" is even");
    }else{
        console.log(i+" is odd");
    }
}
// writr a java program to find the factorial of a number
//5=120 ; 5*4*3*2*1
let n = 5;
let fact = 1;
for(let i=1;i<=n;i++){
    fact = fact * i;
}
console.log("Factorial of "+n+" is "+fact);

//write a program to find the factors of a numbers
//12-2,4,3,6
let num = 12;
for(let i=1;i<=num;i++){
    if(num%i==0){
        console.log(i);
    }   
}
//output: 1,2,3,4,6,12

//while loop
let i = 1;
while(i<=5){
    console.log("javascript");
    i++;
}


