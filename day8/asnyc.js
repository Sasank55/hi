// // promise // //
// let p1 = new Promise((resolve, reject) => {});
// console.log(p1);

// let p2 = new Promise((resolve, reject) => {
//     resolve("Success");
// });
// console.log(p2);
// p2.then((res) => {
//     console.log(res);
// })

// p2.catch(err =>console.log(err))
// p2.finally(() => console.log("Finally"))


// let p3 = new Promise((resolve, reject) => {
//     reject("failures");
// });
// console.log(p3);

// p3
// .then(res => console.log(res))
// .catch(err => console.log(err))
// .finally(() => console.log("Finally"))


 // // ! api fetching // // 

 function fetchusers(){
    let response = fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(response);
    response.then(res =>{
        // console.log(res)
        // console.log(res.json());
        return res.json().then(data =>{
            console.log(data);
        })
    })
    .catch(err => console.log(err))
    
 }
 fetchusers();