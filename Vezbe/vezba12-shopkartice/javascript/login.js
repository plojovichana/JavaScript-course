const form = document.getElementById("login-form");
const btn = document.getElementById("btn")





function submitbtn(){
debugger;
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

  console.log("nea");
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
.then(json => sassionStorage.setItem("user",json.token), console.log(json));
}