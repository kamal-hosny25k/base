



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

const toggle2 = document.querySelector(".toggle-2");

function check(){

    const checkbox = document.querySelector("#checkbox");
    const headOne = document.querySelector(".head-1");
    const headTwo = document.querySelector(".head-2");
    const headThere = document.querySelector(".head-3");

    if(checkbox.checked == true){
        headOne.innerHTML = `<h2>$149</h2><span>/per year</span>`;
        headTwo.innerHTML = `<h2>$608</h2><span>/per year</span>`;
        headThere.innerHTML = `<h2>$1568</h2><span>/per year</span>`;
    } else{
        headOne.innerHTML = `<h2>$29</h2><span>/per month</span>`;
        headTwo.innerHTML = `<h2>$59</h2><span>/per month</span>`;
        headThere.innerHTML = `<h2>$139</h2><span>/per month</span>`;
    }
}

toggle2.addEventListener("click",()=> toggle2.classList.toggle("active"));


// ! Start Testimonials


// Testimonials cards
const carouselCard = document.querySelector("#carousel");


let cardTestimonials =[{
    id:"1" ,
    img:"img/testimonial.png" ,
    p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor diam, feugiat quis enim sed, ullamcorper semper ligula. Mauris consequat justo volutpat.",
    name:"Devid Smith",
    email:"Founter @democompany",
},
{
    id:"2" ,
    img:"img/Testimonial--1.jpg" ,
    p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor diam, feugiat quis enim sed, ullamcorper semper ligula. Mauris consequat justo volutpat.",
    name:"jimmy",
    email:"Founter @democompany",
},
{
    id:"3" ,
    img:"img/Testimonial--2.jpg" ,
    p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor diam, feugiat quis enim sed, ullamcorper semper ligula. Mauris consequat justo volutpat.",
    name:"joseph",
    email:"Founter @democompany",
},
{
    id:"4" ,
    img:"img/Testimonials-4.jpeg" ,
    p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor diam, feugiat quis enim sed, ullamcorper semper ligula. Mauris consequat justo volutpat.",
    name:"gojo satoru",
    email:"Founter @democompany",
},
];



const generatecarouselCard =() =>{
    return (carouselCard.innerHTML =cardTestimonials
        .map((x)=>{
            let{id ,img ,p ,name ,email} = x ;
            return`
            
            <!-- ${id} -->
                <li class="card">
                    <div class="img"><img src=${img} alt="" dragging="false"></div>
                    <div class="info-text">
                    <i class="fa-solid fa-quote-left quote"></i>
                    <p><i>${p}</i></p>
                    <div class="footer-info">
                        <div class="email">
                            <h3>${name}</h3>
                            <h4>${email}</h4>
                        </div>
                        <h2><i class="fa-solid fa-location-dot"></i> dropcam </h2>
                    </div>
                </div>
            </li>
            <!-- end ${id} -->
            `
        }).join(""));
};
generatecarouselCard()
















//
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

// ! End Testimonials

// ! Start Filter
const cardFilter =document.querySelector("#cardFilter");
// ! End Filter









let dataFilter =[{
    id:"1" ,
    className: "card all Eco " ,
    img:"img/cat-1.jpg",
},
{
    id:"2" ,
    className: "card  all Digital" ,
    img:"img/blog-11.jpg",
},{
    id:"3" ,
    className: "card  all Eco" ,
    img:"img/cat-2.jpg",
},{
    id:"4" ,
    className: "card  all Brand" ,
    img:"img/books-1.jpg",
},{
    id:"5" ,
    className: "card  all Digital" ,
    img:"img/blog-9.jpg",
}
,{
    id:"6" ,
    className: "card  all Brand" ,
    img:"img/books-2.jpg",
},
,{
    id:"7" ,
    className: "card  all Eco" ,
    img:"img/cat-4.jpg",
},
,{
    id:"8" ,
    className: "card  all Brand" ,
    img:"img/books-3.jpg",
},
,{
    id:"9" ,
    className: "card  all Digital" ,
    img:"img/blog-20.jpg",
},
,{
    id:"10" ,
    className: "card  all Digital" ,
    img:"img/blog-3.jpg",
},
,{
    id:"10" ,
    className: "card  all Digital" ,
    img:"img/blog-27.jpg",
},

]




const Filtergenerate =() =>{
    return (cardFilter.innerHTML = dataFilter
        .map((x)=>{
            let{id , className,img } = x ;
            return`
            
            <!-- ${id} -->
            <div class="${className}">
            <div class="image">
                <img src=${img} alt="">
                <div class="card-info">
                    <h5>Photo Retouching</h5>
                    <p>Branded Ecommerce</p>
                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
            </div>
            </div>
        </div>
            <!-- end ${id} -->
            `
        }).join(""));
};
Filtergenerate();


let SwitcherLis = document.querySelectorAll(".Switcher li");
let cards = Array.from(document.querySelectorAll(".filter .card"));

SwitcherLis.forEach((li)=>{
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImg);
});
// Remove Avtive
function removeActive() {
    SwitcherLis.forEach((li)=>{
        li.classList.remove("active");
        this.classList.add("active");
    });
}

// Manage Imgs
function manageImg(){
    cards.forEach((card)=>{
        card.style.display ="none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display ="block";
    });
};



// ! Start Counter
let nums = document.querySelectorAll(".counter .nums .num");
let section  = document.querySelector("#counter");
let started  = false; //Function Started ? No





console.log(nums);
console.log(section);

window.addEventListener("scroll",()=>{
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
            started = true;
        }
})







function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(()=>{
        el.textContent ++ ;
        if(el.textContent === goal){
            clearInterval(count);
        }
    }, 2000/goal );
};



// ! End Counter

// ! Start choose-us

function show(){
    let popup = document.querySelector(".popup");
    popup.classList.toggle("active");
}

let myDocument = document.documentElement;
let expand = document.querySelector(".expand");





expand.addEventListener("click", ()=>{

    if(expand.classList.contains("fa-expand")){
        expand.classList.replace("fa-expand", "fa-compress");
        // window
        if (myDocument.requestFullscreen) {
            myDocument.requestFullscreen();
        } 
        else if (myDocument.msRequestFullscreen) {
            myDocument.msRequestFullscreen();
        } 
        else if (myDocument.mozRequestFullScreen) {
            myDocument.mozRequestFullScreen();
        }
        else if(myDocument.webkitRequestFullscreen) {
            myDocument.webkitRequestFullscreen();
        }
    }else{
        expand.classList.replace("fa-compress", "fa-expand");
        // window
        if(document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if(document.msexitFullscreen) {
            document.msexitFullscreen();
        }
        else if(document.mozexitFullscreen) {
            document.mozexitFullscreen();
        }
        else if(document.webkitexitFullscreen) {
            document.webkitexitFullscreen();
        }
    }

});






// ! End choose-us