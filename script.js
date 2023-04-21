const loginPop = document.getElementById("login");
const exit = document.getElementById("exit");
const exitregister = document.getElementById("exitregister")
const email = document.querySelector("#email")
const password = document.querySelector("#pass")
const registerbtn = document.querySelector("#register")
const logincontainer = document.querySelector(".container")
const registercontainer = document.querySelector(".containerRegister")
const formSubmitBtn = document.querySelector("#frombtn")
//abre o login e fecha a de registro,evita bugs pois elas n podem estar abertas ao mesmo tempo
loginPop.addEventListener('click',()=>{
email.value = " ";
password.value= "";
document.querySelector(".container").classList.add("pop")
registercontainer.classList.remove("pop")
})


//fecha o login
exit.addEventListener('click',()=>{

    logincontainer.classList.remove("pop")
    
    })

//popUP da tela de registro
    registerbtn.addEventListener('click',()=>{
        logincontainer.classList.remove("pop")
        registercontainer.classList.add("pop")



    })

    //fechar tela de registro

    exitregister.addEventListener('click',()=>{
        registercontainer.classList.remove("pop")
        })

        //Submit dos forms


        formSubmitBtn.addEventListener('click',()=>{

            logincontainer.classList.remove("pop")
            registercontainer.classList.remove("pop")
        })