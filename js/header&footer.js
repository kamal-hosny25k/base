let header = document.getElementById("header");
let footer = document.getElementById("footer");
let endFooter = document.getElementById("end-footer");

// ? Start header
generateheader = () =>{
    return header.innerHTML =`
    <div class="container">
    <i class="fa-solid fa-bars sideberOpen"></i>

    <span class="logo navLogo"><a href="index.html"><img src="img/logo.png" alt=""><p>Base</p></a></span>

    <div class="menu">
      <div class="logo-toggle">
        <span class="logo"><a href="index.html">Base</a></span>
        <i class="fa-solid fa-x siderbarClose"></i>
      </div>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li class="f-drop"><a href="#"><span>Pages</span><span><i class="fa-solid fa-chevron-down"></i></span></a>
        <ul class="p-drop">
          <li><a class="p-drop-a" href="#">Blog Grid</a></li>
          <li><a class="p-drop-a" href="#">Blog Single</a></li>
          <li><a class="p-drop-a" href="sign-in.html">Sign In</a></li>
          <li><a class="p-drop-a" href="sign-up.html">Sigin Up</a></li>
          <li><a class="p-drop-a" href="#">404</a></li>
        </ul>
      </li>
        <li><a href="#">Support</a></li>
        <li class="sign f-drop-sign">
          <a class="f-drop-sign-a" href="sign-in.html">Sign In</a>
          <a class="f-drop-sign-a" href="sign-up.html">Sign Up</a>
        </li>
      </ul>
    </div>
    <div class="sign">
      <div class="toggle"></div>
      <a href="sign-in.html">Sign In</a>
      <a href="sign-up.html">Sign Up</a>
    </div>
    </div>
    `;
};
generateheader();

//

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
    body.classList.toggle("dark")

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
    if(this.scrollY >= 100){
        nav.classList.add("add");
    }else{
        nav.classList.remove("add")
    }
}
// ? End header








// ? Start footer
generatefooter = () =>{
    return footer.innerHTML =`
    <div class="container">
    <div class="box-1">
        <a class="logo" href="index.html">            
            <img src="img/logo.png" alt="">
            <span>Base</span>
        </a>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <ul class="social">
            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
        </ul>
        </div>
    <div class="box-2">
        <ul class="footer-ul">
        <li>
            <p>Quick Links</p>
            <ul class="footer-ul-child">
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Careers <span>Hiring</span></a></li>
            <li><a href="#">Pricing</a></li>
            </ul>
        </li>
        <li>
            <p>Services</p>
            <ul class="footer-ul-child">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Graphics Design</a></li>
            <li><a href="#">Digital Markeing</a></li>
            <li><a href="#">Ui/Ux Design</a></li>
            </ul>
        </li>
        <li>
            <p>Support</p>
            <ul class="footer-ul-child">
            <li><a href="#">Company</a></li>
            <li><a href="#">Press media</a></li>
            <li><a href="#">Our Blog</a></li>
            <li><a href="#">Contact Us</a></li>
            </ul>
        </li>
        <li>
            <p>Newsletter</p>
            <ul class="footer-ul-child">
            <li>Subscribe to receive future updates</li>
            <form>
                <input type="email" placeholder="Email address">
                <button type="submit"><i class="fa-regular fa-paper-plane"></i></button>
            </form>
            </ul>
        </li>
        </ul>
    </div>
    </div>
    `;
};
generatefooter();

// ! endFooter
generateendFooter = () =>{
    return endFooter.innerHTML =`
    <div class="container">
    <ul>
        <li><a href="#">English</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Support</a></li>
    </ul>
    <p>© 2023 Base. All rights reserved by <b>kamal</b> </p>
    </div>
    `;
};
generateendFooter();

// ? End footer