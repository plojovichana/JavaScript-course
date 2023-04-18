const passwrd = document.getElementById("password");
const cnfpassword = document.getElementById("cnfpassword");
const cnfpassworddiv = document.getElementById("confirmpassword");

console.log(cnfpassword);
function validacija(){
    if (passwrd.value !== cnfpassword.value){
        const errpass = "incorrect password";
       let p =  document.createElement('p');
       p.innerText = errpass;
        cnfpassworddiv.appendChild(p);
        console.log("a");
    }
}
