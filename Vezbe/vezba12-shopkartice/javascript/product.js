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
        btn.onclick = btnukolni();
        carddiv.appendChild(btn);
    }
);