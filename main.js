let signInBtn = document.getElementById("signIn")
let signUpBtn = document.getElementById("signUp")
let fistForm = document.getElementById("form1")
let secondForm = document.getElementById("form2")
let container = document.querySelector(".container")

signInBtn.addEventListener("click" , () => {
    container.classList.remove("right-panel-active")
})

signUpBtn.addEventListener("click" , () => {
    container.classList.add("right-panel-active")
})

fistForm.addEventListener("submit" , (e) => e.preventDefault())
secondForm.addEventListener("submit" , (e) => e.preventDefault())