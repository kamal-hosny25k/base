const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".header");
const siderbarOpen = document.querySelector(".sideberOpen");
const siderbarClose = document.querySelector(".siderbarClose");


// dark-light
let getMode = localStorage.getItem("mode");
if( getMode && getMode === "dark"){
    body.classList.add("dark");
    toggle.classList.add("active")
}

toggle.addEventListener("click",() => {
    body.classList.toggle("dark");

    if(!body.classList.contains("dark")){
        return localStorage.setItem("mode", "light");
    }
    localStorage.setItem("mode", "dark");
})

toggle.addEventListener("click",()=> toggle.classList.toggle("active"));

// siderbarOpen
siderbarOpen.addEventListener("click",()=>{
    nav.classList.add('active')
});
siderbarClose.addEventListener("click", e =>{
    let clickElm = e.target;

    if(!clickElm.classList.contains("sideberOpen") && !clickElm.classList.contains("menu") ){
        nav.classList.remove('active')
    }
});


// scroll
window.onscroll =() =>{
    // console.log(this.scrollY)
    console.log(this.scrollY);
    if(this.scrollY >= 100){
        nav.classList.add("add");
    }else{
        nav.classList.remove("add")
    }
}



// Typing-Animation
const text = document.querySelector('.sec-text');

const textLoad =() =>{
    setTimeout(() =>{
        text.textContent = "UI/UX" ;
    }, 0);
    setTimeout(() =>{
        text.textContent = "Web Develop" ;
    }, 4000);
    setTimeout(() =>{
        text.textContent = "Marketing" ;
    }, 8000);
}

textLoad()
setInterval(textLoad,12000 );