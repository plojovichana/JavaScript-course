const productsList = document.getElementById('products-list');

const loginBtn = document.querySelector('.login');
const logoutBtn = document.querySelector('.logout');

let ulogovan = sessionStorage.getItem('user');

if(!ulogovan){
	loginBtn.style.display = 'block';
	logoutBtn.style.display = 'none';
} else {
	loginBtn.style.display='none';
	logoutBtn.style.display= 'block'
}
fetch('https://fakestoreapi.com/products')
	.then(response => response.json())
	.then(products => {
		productsList.innerHTML = '';
		products.forEach(product => {
			const productCard = createProductCard(product);
			productsList.appendChild(productCard);
		});
	});

	
function createProductCard(product) {
	const productCard = document.createElement('div');
	productCard.classList.add('product-card');

	const productImage = document.createElement('img');
	productImage.src = product.image;
	productImage.alt =product.alt;

	const productTitle = document.createElement('h2');
	productTitle.textContent = product.title;

	const productPrice = document.createElement('p');
	productPrice.textContent = `$${product.price}`;

	const productButton = document.createElement('button');
	productButton.textContent = 'See more';
	productButton.addEventListener('click', () => {
		window.location.href = `product.html?id=${product.id}`;
	});

	productCard.appendChild(productImage);
	productCard.appendChild(productTitle);
	productCard.appendChild(productPrice);
	productCard.appendChild(productButton);

	return productCard;
}


