// let bgcolor = document.querySelectorAll(".bgcolor");
// // console.log(bgcolor);  
// [...bgcolor].map(Element => {
//     // console.log(Element);
//     Element.addEventListener("mouseover", () => {
//         // console.log(Element.innerText);
//         Element.style.backgroundColor = Element.innerText;
//     });
//     Element.addEventListener("mouseout", () => {
//         // console.log(Element.innerText);
//         Element.style.backgroundColor = "white";
//     });
// });



// let ele = document.createElement("h1");
// ele.innerText = "Hello World";
// // ele.id = "demo";
// ele.setAttribute("id", "demo");
// console.log(ele);
// // ele.removeAttribute("id");
// document.body.appendChild(ele);

// let image = document.createElement("img");
// image.src="./3606208.jpg";
// console.log(image);
// document.body.appendChild(image);


let form = document.querySelector("form");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let email = document.querySelector("#email");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log(event);
    // console.log("Form Submitted");
    // console.log(username.value);
    let name = username.value;
    let pass = password.value;
    let mail = email.value;
    let userdetails = {
        name: name,
        password: pass,
        email: mail
    };
    console.log(userdetails);

});    