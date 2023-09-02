// icon

const inputFile = document.querySelector("#input-file");
const iconImg = document.querySelector("#icon-img");

inputFile.addEventListener("change", ()=>{
    iconImg.src = URL.createObjectURL(inputFile.files[0])
});


//header
let headerSettings = document.querySelector("#header-settings");

generateProfileH = () => {
    return headerSettings.innerHTML = `
    <div class="icon">
    <div class="upload">
        <img id="icon-img" src="img/Testimonials-4.jpeg" alt="">
        <div class="round">
            <input type="file" id="input-file">
            <i class="fa-solid fa-pen"></i>
        </div>
    </div>
    
    <h3>kamal hosny</h3>
</div>
<ul class="links-settings">
    <li><a href="profile.html" class="active"><i class="fa-regular fa-user"></i><span>Account</span></a></li>
    <li><a href="profile-Password.html"><i class="fa-solid fa-lock"></i><span>Password</span></a></li>
    <li><a href="#"><i class="fa-solid fa-shield-halved"></i><span>Security</span></a></li>
    <li><a href="#"><i class="fa-solid fa-mobile-screen-button"></i><span>Application</span></a></li>
    <li><a href="#"><i class="fa-regular fa-bell"></i><span>Notification</span></a></li>
</ul>
    `
};

// generateProfileH();

console.log(headerSettings)



