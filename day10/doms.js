// let element = document.getElementById("demo");
// element.innerText = "DOM Demo";
// console.log(element);

// let element = document.getElementsByClassName("test");


// element[0].style.backgroundColor ='red';
// element[1].style.backgroundColor ='blue';

// console.log(element);
// console.log(Array.isArray(element));

// spreadoperatior element
// let x = [...element];
// console.log(x, Array.isArray(x));
// x.map(element => {
//     element.style.backgroundColor = 'green';
//     element.style.color = 'white';
//     element.style.texttransform = 'uppercase';
// });

// let ele = document.querySelector("#demo");
// console.log(ele);
// let ele = document.querySelector(".test");
// console.log(ele);

// let ele = document.querySelectorAll(".test");
// console.log(ele);

let demo = document.getElementById("demo");
demo.addEventListener("click",()=> {
    console.log("clicked");
    // demo.style.backgroundColor = 'red';
    // demo.style.color = 'white';
    document.body.style.backgroundColor = 'red';
});


