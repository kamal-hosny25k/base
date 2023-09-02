// icon

const inputFile = document.querySelector("#input-file");
const iconImg = document.querySelector("#icon-img");

inputFile.addEventListener("change", ()=>{
    iconImg.src = URL.createObjectURL(inputFile.files[0])
});
