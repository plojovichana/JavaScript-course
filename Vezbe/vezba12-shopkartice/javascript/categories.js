const categoriesList = document.querySelector('.categories-list');
const BASE_URL = "https://fakestoreapi.com/";

fetch(BASE_URL+'products/categories')
.then(response => response.json())
.then(categories => {
categories.forEach(category => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = category;
    a.href = `category.html?name=${category}`; 
    li.appendChild(a);
    categoriesList.appendChild(li);
});
})
.catch(error => console.error(error));