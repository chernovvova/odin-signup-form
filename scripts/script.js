const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    const pass = document.querySelector("#pass");
    const confirmPass = document.querySelector("#confrim-pass");
    
    if(pass.value !== confirmPass.value) {
        confirmPass.style.border = "red solid 1px"
    }
});