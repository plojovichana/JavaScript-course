const id = new URLSearchParams(window.location.search).get('id');
const carddiv = document.querySelector('.card');

fetch('https://fakestoreapi.com/products/' + id)    
    .then(response => response.json())
    .then(data => {
        console.log(data); 
        const img =  document.createElement("img");
        img.src = data.image;
        carddiv.appendChild(img);

        const title = document.createElement("h2");
        title.innerText= data.title;
        carddiv.appendChild(title)

        const desc = document.createElement("p");
        desc.innerText = data.description;
        carddiv.appendChild(desc);

        const price = document.createElement("h2");
        price.innerText  = data.price+ " $";
        carddiv.appendChild(price);

        const cat = document.createElement("h2");
        cat.innerText = "category: "+data.category;
        carddiv.appendChild(cat)

        const btn = document.createElement("button");
        btn.innerText = "Ukloni"
        carddiv.appendChild(btn);
    }
);




// const loginBtn = document.querySelector('.login');
// const logoutBtn = document.querySelector('.logout');

// let ulogovan = sessionStorage.getItem('user');

// if(!ulogovan){
// 	loginBtn.style.display = 'block';
// 	logoutBtn.style.display = 'none';
// } else {
// 	loginBtn.style.display='none';
// 	logoutBtn.style.display= 'block'
// }