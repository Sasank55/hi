// let mainele = document.createElement("div");
// mainele.innerText = "main";
// mainele.setAttribute("id" , "mainblock");

// console.log(mainele)

// let topele = document.createElement("div");
// topele.setAttribute("class" , "topblock");
// // console.log(topele);
// let image = document.createElement("img");
// image.src="https://cdn.pixabay.com/photo/2023/02/09/16/43/cat-7779237_640.jpg";
// image.width="300";
// image.height="300";
// image.style.objectFit="cover"

// let bottomele = document.createElement("div");
// bottomele.setAttribute("class" ,"bottomele");
// // console.log(bottomele);

// let h1 = document.createElement("h1");
// h1.innerText = "cat";

// let btn = document.createElement("button");
// btn.innerText="view more";

// bottomele.appendChild(h1);
// bottomele.appendChild(btn);
// topele.appendChild(image);
// mainele.appendChild(topele);
// mainele.appendChild(bottomele);

// document.body.appendChild(mainele)


let form =document.querySelector("form");
let username = document.getElementById("uname");
let password=document.getElementById("upass");
let check = document.getElementById("check");
let show = document.getElementById("show");
let gender =document.getElementsByName("gender");
// console.log(gender);

check.addEventListener("click" , (Event)=>{
    // console.log(Event.target.checked);
    if(Event.target.checked == true){
        password.setAttribute("type" , "text");
        show.innerText = "hide password";
    }else{
        password.setAttribute("type" , "password");
        show.innerText="show password";
    }
})

form.addEventListener("submit" , Event=>{
    Event.preventDefault();
    let un = username.value;
    let up =password.value;
    for(let i=0;i<gender.length;i++){
        console.log(gender[i].checked);
        
    }

});