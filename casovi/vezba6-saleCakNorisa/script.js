let sale = document.querySelector(".divzasale");
let btn = document.querySelector(".btn");
let novasala = document.createElement('p');
async function preuzmi(){
    const resp = await fetch("https://api.chucknorris.io/jokes/random");
    const sala = await resp.json();
    novasala.innerText = sala.value;
    console.log(sale);
    sale.appendChild(novasala);
    sale="";
}
btn.addEventListener("click", preuzmi);