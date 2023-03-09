const loginPop = document.getElementById("login");
const exit = document.getElementById("exit");
const email = document.querySelector("#email")
const password = document.querySelector("#pass")


loginPop.addEventListener('click',()=>{
email.value = " ";
password.value= "";
document.querySelector(".container").classList.add("pop")

})



exit.addEventListener('click',()=>{

    document.querySelector(".container").classList.remove("pop")
    
    })