// let user1 = "Sasank";
// let user2 = "Arivind";
// let user3 = "Sai";
// let user4 = "Shiva";
// let user5 = "sanjay";
// let user6 = "pavan  ";
// console.log(user1);
// console.log(user2);


let user = ["Sanjay", "Sasank", "Arivind", "Sai", "Shiva", "Pavan"];
// console.log(user[0]);
// console.log(user[1]);

// user.map((user ,i)=>{
//     console.log(user , i);
// })

// let x=user.map((user ,i)=>{
//     return user;
// });
// console.log(user , x);

// let x=user.forEach((user ,i)=>{
//     // console.log(user);
//     return user;
// });
// console.log(user);
// let userdetails = {
//     name: "sasank",
//     age: 20,
//     city: "hyderabad",
// }
// console.log(userdetails);
// console.log(userdetails.name);
// console.log(userdetails.age);
// console.log(userdetails.city);

// let userdetails = {
//     name: "sasank",
//     age: 20,
//     city: "hyderabad",
//     area: "kukaatpally",
//     pincode: 500072,
//     state: "Telangana",
//     country: "India",   
// }
// console.log(userdetails.area);
// console.log(userdetails.name);

//nested object
let userdetails = {
    name: "sasank",
    age: 20,
    city: "hyderabad",
    area: "kukaatpally",
    pincode: 500072,
    state: "Telangana",
    country: "India",
    address: {
        street: "kphb",
        lane: "5th",
        landmark: "kphb metro station",
    }
}
console.log(userdetails.address.street);
console.log(userdetails.address.landmark);
