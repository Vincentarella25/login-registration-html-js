const sign_in_btn = document.querySelector("#sign-in-btn"),
  sign_up_btn = document.querySelector("#sign-up-btn"),
 container = document.querySelector(".container");


sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

let forgetPasswordForm = document.querySelector(".forgot-password-container");
let forgetPasswordButton = document.querySelector(".forgot-password-button");
let arrowLeft = document.querySelector("#arrowLeft");

forgetPasswordButton.addEventListener('click', () => {
    forgetPasswordForm.style.zIndex = "7";
    forgetPasswordForm.style.transform = "translateY(0)";
});

arrowLeft.addEventListener('click', () => {
    forgetPasswordForm.style.zIndex = "-1";
    forgetPasswordForm.style.transform = "translateY(200%)";
});



