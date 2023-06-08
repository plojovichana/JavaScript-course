const categoriesList = document.querySelector('.categories-list');
const BASE_URL = "https://fakestoreapi.com/";
const main = document.querySelector('main');
// const productsList = document.querySelector('.products-list');

fetch(BASE_URL+'products/categories')
.then(response => response.json())
.then(categories => {
categories.forEach(category => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = category;
    li.appendChild(a);
    categoriesList.appendChild(li);
});
}
);


 categoriesList.addEventListener('click', (e) => {
    if(e.target.tagName === 'A'){const cont = document.createElement("div");
            cont.className = 'products-list';
            main.appendChild(cont);
        const category = e.target.textContent;
        fetch(BASE_URL+'products/category/'+category)
        .then(response => response.json())
        .then(products => {
            
            products.forEach(product => {
                const card = document.createElement('card');
                card.className = 'card';
                const img = document.createElement('img');
                img.src = product.image;
                const price = document.createElement('p');
                price.className = 'price';
                price.textContent = product.price + ' $';
                const h1 = document.createElement('h1');
                h1.textContent = product.title;
                const a = document.createElement('a');
                a.href = 'product.html?id='+product.id;
                a.textContent = 'View details';
                card.appendChild(img);
                card.appendChild(h1);
                card.appendChild(price);
                card.appendChild(a);

                cont.appendChild(card);
            });
        });
       

    }
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