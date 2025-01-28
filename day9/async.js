// async function demo()
// {
//     console.log("start");
//     console.log(10);
//     console.log(20);
//     console.log(30);
// }
// demo();


// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('success');
//     }, 4000);
// });


// async function demo()
// {
//     console.log("start");
//     let x = await p;
//     console.log(x);
//     console.log("end");
// }
// demo();

async function fetchusers(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data=await response.json();
    console.log(data);
}
fetchusers();

