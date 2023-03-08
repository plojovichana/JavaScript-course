async function myDisplay() {
    let myPromise = new Promise((resolve, reject) => {
        resolve("Hello World");
    });

    await myPromise.then((value) => {
        console.log(value);
    });
}
console.log(myDisplay()); 
 
//npm install node-fetch@2


const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))

//get-uzima
//post-dadaje
//put-menja

//post

const data = {
    title : "Nova obaveza",
    completed : false,
};

fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-type': 'application/json',
    },
})
    .then(response => response.json())
    .then(data => console.log(data));


//put

const dataPut = {
    id: 1,
    title: "izmenjena obaveza",
    completed: true,
};
fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'PUT',
    body: JSON.stringify(dataPut),
    headers: {
        'Content-type': 'application/json',
    },
})
    .then(response => response.json())
    .then(data => console.log(data));
