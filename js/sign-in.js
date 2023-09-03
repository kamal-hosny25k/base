const form = document.querySelector("form");
const emailField = form.querySelector(".email-field");
const emailInput = emailField.querySelector(".email");
const passField = form.querySelector(".create-password");
const passInput = passField.querySelector(".password");

// Email Validtion
function checkEmail() {
    const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(emaiPattern)){
        return emailField.classList.add("invalid");
    }else{
        return emailField.classList.remove("invalid");
    };
};

// Hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click" , () => {
        const pInput = eyeIcon.parentElement.querySelector("input"); //getting parent element of eye icon and selecting the password input
        if(pInput.type === "password") {
            eyeIcon.classList.replace("bx-hide", "bx-show");
            return (pInput.type = "text");
        }else{
            eyeIcon.classList.replace("bx-show", "bx-hide");
            pInput.type = "password";
        };
    });
});

// Password Validation
function createPass() {
    const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passInput.value.match(passPattern)){
        return passField.classList.add("invalid");
    }else{
        return passField.classList.remove("invalid");
    };
};

// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
    e.preventDefault(); //preventing form submitting
    checkEmail();
    createPass();

    //calling function on key up
    emailInput.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", createPass);

    if(
        !emailField.classList.contains("invalid") &&
        !passField.classList.contains("invalid")){
            location.href = form.getAttribute("action");
    };
});