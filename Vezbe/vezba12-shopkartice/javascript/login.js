const form = document.getElementById("login-form");
const btn = document.getElementById("btn")


function submitbtn(){

  console.log("nesto");
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

fetch('https://fakestoreapi.com/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: username,
    password: password
  })
})

.then(response => response.json())
.then(json => sessionStorage.setItem("user",json.token))
.then(res => window.location.href = 'index.html');

}




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