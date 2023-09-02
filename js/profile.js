// icon

const inputFile = document.querySelector("#input-file");
const iconImg = document.querySelector("#icon-img");

inputFile.addEventListener("change", ()=>{
    iconImg.src = URL.createObjectURL(inputFile.files[0])
});


//header
let headerSettings = document.querySelector(".header-settings");

generateProfileH = () => {
    return header.innerHTML = `
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
    `
};

// generateProfileH()