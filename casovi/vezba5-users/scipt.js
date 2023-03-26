let container = document.querySelector('.container');


async function getUsers(){
    let data = await fetch('https://jsonplaceholder.typicode.com/users');
    let response = await data.json();
    return response;
}
getUsers().then((response) => {
    console.log(response);
response.forEach((el)=>{
    let card = document.createElement('div')
    card.className = 'card';

    let name = document.createElement('p');
    name.innerText = "Name "+el.name;

    let usern = document.createElement('p');
    usern.innerText = "Username " + el.usern;

    let email = document.createElement('p');
    email.innerText = "Email " + el.email;

    card.addEventListener('click', () => {
        window.location.href = `index1.html?id= ${el.id}`;
    });

    card.appendChild(name);
    card.appendChild(usern);
    card.appendChild(email);
    container.appendChild(card);

});
});

