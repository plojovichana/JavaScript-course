const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const btn = document.getElementById("btn")





function submitbtn(){
  
fetch('https://fakestoreapi.com/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: username.value,
    password: password.value
  })
})
.then(response => response.json())
.then(data => {
  console.log(data);
}
);


}