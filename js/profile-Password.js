// icon
const inputFile = document.querySelector("#input-file");
const iconImg = document.querySelector("#icon-img");

inputFile.addEventListener("change", ()=>{
    iconImg.src = URL.createObjectURL(inputFile.files[0]);
});

// Validtion

const form = document.querySelector("form"),
  oldPasswordField = form.querySelector(".old-password"),
  oldPasswordInput = oldPasswordField.querySelector(".Opassword"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword");







  // Hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input"); //getting parent element of eye icon and selecting the password input
    if (pInput.type === "password") {
      eyeIcon.classList.replace("bx-hide", "bx-show");
      return (pInput.type = "text");
    }
    eyeIcon.classList.replace("bx-show", "bx-hide");
    pInput.type = "password";
  });
});






// Password Validation 1
function OldPass() {
    const passPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (!oldPasswordInput.value.match(passPattern)) {
      return oldPasswordField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
    }else{
      oldPasswordField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
    };
};


// Password Validation 2
function createPass() {
    const passPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (!passInput.value.match(passPattern)) {
      return passField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
    }else{
      passField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
    };
};

// Confirm Password Validtion
function confirmPass() {
    if (passInput.value !== cPassInput.value || cPassInput.value === "") {
      return cPassField.classList.add("invalid");
    }else{
      cPassField.classList.remove("invalid");
    };
};
  
  // Calling Funtion on Form Sumbit
  form.addEventListener("submit", (e) => {
    e.preventDefault(); //preventing form submitting
    OldPass();
    createPass();
    confirmPass();
  
    //calling function on key up
    oldPasswordInput.addEventListener("keyup", OldPass);
    passInput.addEventListener("keyup", createPass);
    cPassInput.addEventListener("keyup", confirmPass);
  
    if (
      !oldPasswordInput.classList.contains("invalid") &&
      !passField.classList.contains("invalid") &&
      !cPassField.classList.contains("invalid")
    ) {
      location.href = form.getAttribute("action");
    };
  });