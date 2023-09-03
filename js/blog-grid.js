// ! Start pagination
const startBtn = document.querySelector("#startBtn");
const endBtn = document.querySelector("#endBtn");
const prevNext = document.querySelectorAll(".prevNext");
const numbers = document.querySelectorAll(".link");

// Setting an initial step
let currentStep = 0;

// Function to update the button states
const updateBtn = () => {
    count();
    // If we are at the last step
    if ( currentStep === 4 ) {
        endBtn.disabled = true ;
        prevNext[1].disabled = true ;
    } else if(currentStep === 0) {
    // If we are at the first step
        startBtn.disabled = true ;
        prevNext[0].disabled = true ;
    } else {
        endBtn.disabled = false ;
        prevNext[1].disabled = false ;
        startBtn.disabled = false ;
        prevNext[0].disabled = false ;
    };
};

// Add event listeners to the number links
numbers.forEach((number, numIndex) => {
    number.addEventListener("click", (e) => {
        e.preventDefault();
      // Set the current step to the clicked number link
        currentStep = numIndex;
      // Remove the "active" class from the previously active number link
        document.querySelector(".active").classList.remove("active");
      // Add the "active" class to the clicked number link
        number.classList.add("active");
      updateBtn(); // Update the button states
    });
});

  // Add event listeners to the "Previous" and "Next" buttons
prevNext.forEach((button) => {

    button.addEventListener("click", (e) => {
      // Increment or decrement the current step based on the button clicked
    currentStep += e.target.id === "next" ? 1 : -1;
    numbers.forEach((number, numIndex) => {
        // Toggle the "active" class on the number links based on the current step
        number.classList.toggle("active", numIndex === currentStep);
        updateBtn(); // Update the button states
    });
    });
});

  // Add event listener to the "Start" button
startBtn.addEventListener("click", () => {
    // Remove the "active" class from the previously active number link
    document.querySelector(".active").classList.remove("active");
    // Add the "active" class to the first number link
    numbers[0].classList.add("active");
    currentStep = 0;
    updateBtn(); // Update the button states
    endBtn.disabled = false;
    prevNext[1].disabled = false;
});
  // Add event listener to the "End" button
endBtn.addEventListener("click", () => {
    // Remove the "active" class from the previously active number link
    document.querySelector(".active").classList.remove("active");
    // Add the "active" class to the last number link
    numbers[4].classList.add("active");
    currentStep = 4;
    updateBtn(); // Update the button states
    startBtn.disabled = false;
    prevNext[0].disabled = false;
});
// ?  count  //
const blogGridCards = document.querySelector("#blog-grid-cards");
function count(){
    if( currentStep === 0){
        //!  0  //
        let cardsPagination =[{
            id:"1",
            img:"img/blog-01.png",
            name:"Office-1",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
        ,{
            id:"2",
            img:"img/blog-02.png",
            name:"Office-2",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
        ,{
            id:"3",
            img:"img/blog-03.png",
            name:"Office-3",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
        ,{
            id:"4",
            img:"img/blog-04.png",
            name:"Office-4",
            date:"25 Jul, 1999",
            p:"Free advertising for your online business",
        }
        ,{
            id:"5",
            img:"img/blog-05.png",
            name:"Office-5",
            date:"25 may, 2005",
            p:"Free advertising for your online business",
        }
        ,{
            id:"6",
            img:"img/blog-1.jpg",
            name:"Office-6",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
    ];

        const generatePagination = ()=> {
            return blogGridCards.innerHTML = cardsPagination
            .map((x)=>{
                let{id ,img ,name ,date ,p} = x ;
                return`
        
                <!-- start ${id} -->
                        <div class="card">
                        <div class="image">
                            <img src= ${img} alt="">
                            <div><a href="#">Read More</a></div>
                            
                        </div>
                        <div class="info">
                            <div class="head">
                            <p><span><i class="fa-regular fa-user"></i></span><span>${name}</span></p>
                            <p><span><i class="fa-regular fa-calendar"></i></span><span>${date}</span></p>
                            </div>
                            <h2>
                            ${p}
                            </h2>
                        </div>
                        </div>
                        <!-- end ${id} --> 
                `
            }).join("");
        };
        
        generatePagination();
    }
    else if(currentStep === 1){
        //!  1  //
        let cardsPagination =[{
            id:"7",
            img:"img/blog-2.jpg",
            name:"Office-7",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
        ,{
            id:"8",
            img:"img/blog-3.jpg",
            name:"Office-8",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
        ,{
            id:"9",
            img:"img/blog-4.jpg",
            name:"Office-9",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
        ,{
            id:"10",
            img:"img/blog-5.jpg",
            name:"Office-10",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
        ,{
            id:"11",
            img:"img/blog-6.jpg",
            name:"Office-11",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
        ,{
            id:"12",
            img:"img/blog-7.jpg",
            name:"Office-12",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
    
    ];

        const generatePagination = ()=> {
            return blogGridCards.innerHTML = cardsPagination
            .map((x)=>{
                let{id ,img ,name ,date ,p} = x ;
                return`
        
                <!-- start ${id} -->
                        <div class="card">
                        <div class="image">
                            <img src= ${img} alt="">
                            <div><a href="#">Read More</a></div>
                            
                        </div>
                        <div class="info">
                            <div class="head">
                            <p><span><i class="fa-regular fa-user"></i></span><span>${name}</span></p>
                            <p><span><i class="fa-regular fa-calendar"></i></span><span>${date}</span></p>
                            </div>
                            <h2>
                            ${p}
                            </h2>
                        </div>
                        </div>
                        <!-- end ${id} --> 
                `
            }).join("");
        };
        
        generatePagination();

    }
    else if(currentStep === 2){
        //!  2  //
        let cardsPagination =[{
            id:"13",
            img:"img/blog-13.jpg",
            name:"Office-13",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
        ,{
            id:"14",
            img:"img/blog-14.jpg",
            name:"Office-14",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
        ,{
            id:"15",
            img:"img/blog-15.jpg",
            name:"Office-15",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
        ,{
            id:"16",
            img:"img/blog-16.jpg",
            name:"Office-16",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
        ,{
            id:"17",
            img:"img/blog-17.jpg",
            name:"Office-17",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
        ,{
            id:"18",
            img:"img/blog-18.jpg",
            name:"Office-18",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
    
    
    ];

        const generatePagination = ()=> {
            return blogGridCards.innerHTML = cardsPagination
            .map((x)=>{
                let{id ,img ,name ,date ,p} = x ;
                return`
        
                <!-- start ${id} -->
                        <div class="card">
                        <div class="image">
                            <img src= ${img} alt="">
                            <div><a href="#">Read More</a></div>
                            
                        </div>
                        <div class="info">
                            <div class="head">
                            <p><span><i class="fa-regular fa-user"></i></span><span>${name}</span></p>
                            <p><span><i class="fa-regular fa-calendar"></i></span><span>${date}</span></p>
                            </div>
                            <h2>
                            ${p}
                            </h2>
                        </div>
                        </div>
                        <!-- end ${id} --> 
                `
            }).join("");
        };
        
        generatePagination();
    }
    else if(currentStep === 3){
        //!  3  //
        let cardsPagination =[{
            id:"19",
            img:"img/blog-19.jpg",
            name:"Office-19",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        } ,{
            id:"20",
            img:"img/blog-20.jpg",
            name:"Office-20",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
        ,{
            id:"21",
            img:"img/blog-21.jpg",
            name:"Office-21",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
        ,{
            id:"22",
            img:"img/blog-22.jpg",
            name:"Office-22",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
        ,{
            id:"23",
            img:"img/blog-23.jpg",
            name:"Office-23",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
        ,{
            id:"24",
            img:"img/blog-24.jpg",
            name:"Office-24",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
    ];

        const generatePagination = ()=> {
            return blogGridCards.innerHTML = cardsPagination
            .map((x)=>{
                let{id ,img ,name ,date ,p} = x ;
                return`
        
                <!-- start ${id} -->
                        <div class="card">
                        <div class="image">
                            <img src= ${img} alt="">
                            <div><a href="#">Read More</a></div>
                            
                        </div>
                        <div class="info">
                            <div class="head">
                            <p><span><i class="fa-regular fa-user"></i></span><span>${name}</span></p>
                            <p><span><i class="fa-regular fa-calendar"></i></span><span>${date}</span></p>
                            </div>
                            <h2>
                            ${p}
                            </h2>
                        </div>
                        </div>
                        <!-- end ${id} --> 
                `
            }).join("");
        };
        
        generatePagination();
    }
    else if(currentStep === 4){
        //!  4  //
        let cardsPagination =[{
            id:"25",
            img:"img/blog-25.jpg",
            name:"Office-25",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        },
        ,{
            id:"26",
            img:"img/blog-26.jpg",
            name:"Office-26",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
        ,{
            id:"27",
            img:"img/blog-27.jpg",
            name:"Office-27",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
        ,{
            id:"28",
            img:"img/blog-8.jpg",
            name:"Office-28",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
        ,{
            id:"29",
            img:"img/blog-9.jpg",
            name:"Office-29",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
        ,{
            id:"30",
            img:"img/blog-16.jpg",
            name:"Office-30",
            date:"25 Dec, 2025",
            p:"Free advertising for your online business",
        }
        
    ];




        const generatePagination = ()=> {
            return blogGridCards.innerHTML = cardsPagination
            .map((x)=>{
                let{id ,img ,name ,date ,p} = x ;
                return`
        
                <!-- start ${id} -->
                        <div class="card">
                        <div class="image">
                            <img src= ${img} alt="">
                            <div><a href="#">Read More</a></div>
                            
                        </div>
                        <div class="info">
                            <div class="head">
                            <p><span><i class="fa-regular fa-user"></i></span><span>${name}</span></p>
                            <p><span><i class="fa-regular fa-calendar"></i></span><span>${date}</span></p>
                            </div>
                            <h2>
                            ${p}
                            </h2>
                        </div>
                        </div>
                        <!-- end ${id} --> 
                `
            }).join("");
        };
        
        generatePagination();
    };
};
// ? load
  //!  0  //
  let cardsPagination =[{
    id:"1",
    img:"img/blog-01.png",
    name:"Office-1",
    date:"25 Dec, 2025",
    p:"Free advertising for your online business",
}
,{
    id:"2",
    img:"img/blog-02.png",
    name:"Office-2",
    date:"25 Dec, 2025",
    p:"Free advertising for your online business",
}
,{
    id:"3",
    img:"img/blog-03.png",
    name:"Office-3",
    date:"25 Dec, 2025",
    p:"Free advertising for your online business",
}
,{
    id:"4",
    img:"img/blog-04.png",
    name:"Office-4",
    date:"25 Jul, 1999",
    p:"Free advertising for your online business",
}
,{
    id:"5",
    img:"img/blog-05.png",
    name:"Office-5",
    date:"25 may, 2005",
    p:"Free advertising for your online business",
}
,{
    id:"6",
    img:"img/blog-1.jpg",
    name:"Office-6",
    date:"25 Dec, 2025",
    p:"Free advertising for your online business",
}
];

const generatePagination = ()=> {
    return blogGridCards.innerHTML = cardsPagination
    .map((x)=>{
        let{id ,img ,name ,date ,p} = x ;
        return`

        <!-- start ${id} -->
                <div class="card">
                <div class="image">
                    <img src= ${img} alt="">
                    <div><a href="#">Read More</a></div>
                    
                </div>
                <div class="info">
                    <div class="head">
                    <p><span><i class="fa-regular fa-user"></i></span><span>${name}</span></p>
                    <p><span><i class="fa-regular fa-calendar"></i></span><span>${date}</span></p>
                    </div>
                    <h2>
                    ${p}
                    </h2>
                </div>
                </div>
                <!-- end ${id} --> 
        `
    }).join("");
};

generatePagination();


// ! End pagination





