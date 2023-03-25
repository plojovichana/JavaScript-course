// let card = document.querySelector('.card');
// let inp = document.querySelector('input');
// let button = document.querySelector('button');

// console.log(card);
// card.style.width = '300px';
// card.style.height = '300px';
// button.addEventListener('click', ()=>{
// card.style.backgroundColor = 'red';
//     let tekst = document.createElement('p');
//     tekst.innerText = inp.value;
//     let check = document.createElement('input');
//     check.type="checkbox";
//     card.appendChild(tekst);
//     card.appendChild(check);

//     check.addEventListener('click', ()=>{
//         if(check.checked){
//             tekst.style.textDecoration = 'line-through';
//         }else{
//             tekst.style.textDecoration = 'none';
//         }
//     })
// })


// let card = document.querySelector('.card');
// let inp = document.querySelector('input');
// let button = document.querySelector('button');

// button.addEventListener('click', ()=>{
//     let tekst = document.createElement('p');
//     tekst.innerText = inp.value;
//     let check = document.createElement('input');
//     check.type="checkbox";
//     card.appendChild(tekst);
//     card.appendChild(check);

//     check.addEventListener('click', ()=>{
//         if(check.checked){
//             tekst.style.textDecoration = 'line-through';
//         }else{
//             tekst.style.textDecoration = 'none';
//         }
//     })
// })

let input = document.getElementById("input");
        let btn = document.getElementById("btn");
        let list = document.getElementById("list");
        let arr = [];
        btn.addEventListener("click", function(){
            let li = document.createElement("li");
            li.innerHTML = input.value;
            let btn = document.createElement("button");
            btn.innerHTML = "Delete";
            li.appendChild(btn);
            list.appendChild(li);
            arr.push(li);
            input.value = "";
            btn.addEventListener("click", function(){
                li.remove();
                arr.splice(arr.indexOf(li), 1);
            })


            li.addEventListener("click",()=>{
                li.style.textDecoration = "line-through";
            })
        })


