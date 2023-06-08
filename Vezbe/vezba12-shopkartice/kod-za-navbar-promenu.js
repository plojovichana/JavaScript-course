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

function logout_click() {
    document.addEventListener("click", function(){
        sessionStorage.clear();
        window.location.href = 'login.html';
    }
    )
}
