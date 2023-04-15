const categoriesList = document.querySelector('.categories-list');
const BASE_URL = "https://fakestoreapi.com/";
const productsList = document.querySelector('.products-list');

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
    if(e.target.tagName === 'A'){
        const category = e.target.textContent;
        fetch(BASE_URL+'products/category/'+category)
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const div = document.createElement('div');
                div.className = 'card';
                const img = document.createElement('img');
                img.src = product.image;
                const price = document.createElement('p');
                price.className = 'price';
                price.textContent = product.price + ' $';
                const h1 = document.createElement('h1');
                h1.textContent = product.title;
                const p = document.createElement('p');
                p.textContent = product.description;
                const a = document.createElement('a');
                a.href = 'product.html?id='+product.id;
                a.textContent = 'View details';
                div.appendChild(img);
                div.appendChild(h1);
                div.appendChild(price);
                div.appendChild(p);
                div.appendChild(a);
                productsList.appendChild(div);
            });
        });
       

    }
}


);