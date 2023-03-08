// async function myDisplay() {
//     let myPromise = new Promise((resolve, reject) => {
//         resolve("Hello World");
//     });

//     await myPromise.then((value) => {
//         console.log(value);
//     });
// }
// console.log(myDisplay()); 
 
// //npm install node-fetch@2


// const fetch = require('node-fetch');

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => console.log(data))

// //get-uzima
// //post-dadaje
// //put-menja
// //delete-brise

// //post

// const data = {
//     title : "Nova obaveza",
//     completed : false,
// };

// fetch('https://jsonplaceholder.typicode.com/todos/1', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//         'Content-type': 'application/json',
//     },
// })
//     .then(response => response.json())
//     .then(data => console.log(data));


// //put

// const dataPut = {
//     id: 1,
//     title: "izmenjena obaveza",
//     completed: true,
// };

// fetch('https://jsonplaceholder.typicode.com/todos/1', {
//     method: 'PUT',
//     body: JSON.stringify(dataPut),
//     headers: {
//         'Content-type': 'application/json',
//     },
// })
//     .then(response => response.json())
//     .then(data => console.log(data));

//

// fetch('https://run.mocky.io/v3/4f1c5209-5da6-4963-864f-f853094ac12e', {
//     method: 'GET'})
//     .then(response => response.json())
//     .then(data => console.log(data));

//delete

// fetch('https://jsonplaceholder.typicode.com/todos/1', { 
//     method: 'DELETE',
// })
//     .then((response)=> console.log("Odgovor sa statusom: " + response.status))

//

// async function fetchData(url){
//     try{
//         const response = await fetch(url);
//         if(!response.ok){
//             throw new Error("Greska,status: " + response.status);
//         }
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }
// (async () => {
//     const url = 'https://jsonplaceholder.typicode.com/todos/1';
//     const data = await fetchData(url);
//     console.log(data);
// })();


