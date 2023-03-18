// let tekst = document.getElementsByTagName("p");
// console.log(tekst);

// tekst[0].innerText = "Ovo je novi tekst";

// let tek = document.getElementById("t");
// console.log(tek);
// console.log(tek.innerText);

// tek.style.color="red";
// tek.style.backgroundColor="blue";


// let card = document.getElementsByClassName("card");
// console.log(card);

// let select = document.querySelector(".card");
// console.log(select);

// let selectAll = document.querySelectorAll(".card");

// let inp = document.querySelector("input");


// function klikni(){
//     console.log(inp.value);
// }


// let btn = document.querySelector("button");
// btn.addEventListener("click",()=>{
//     console.log(inp.value);
// })


let btn = document.querySelector("button");
let div = document.querySelector("div");
let brojac =0;

let boje = ["red","blue","green","yellow"];

function btnklik(){
    let index = Math.floor(Math.random()*boje.length);
    div.style.backgroundColor=boje[index];
    div.style.color="white";
    div.style.border="none";
    
}  
