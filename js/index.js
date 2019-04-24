
//==================================== Navbar

const arrow = document.querySelector(".arrow");
const arrows = document.querySelectorAll(".arrow-container")

const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");
const hamburger = document.querySelector(".hamburger");
const exit = document.querySelector(".exit");
const linkContainer = document.querySelector(".link-container");
const portfolioNavLink = document.querySelector(".portfolio-link");
const aboutNavLink = document.querySelector(".about-link");
const contactNavLink = document.querySelector(".contact-link");

const portfolioContainer = document.querySelector(".port-container");
const aboutContainer = document.querySelector(".about-container");
const contactContainer = document.querySelector(".contact-container");
const bannerContainer = document.querySelector(".banner-container");

portfolioNavLink.addEventListener("click", () => {
    portfolioContainer.scrollIntoView({
        behavior: 'smooth'
        });
    navbar.classList.remove("navbar-expanded");
    // portfolioNavLink.classList.add("link-active");
    hamburger.style.display = "inline";
    exit.style.display = "none";
});

aboutNavLink.addEventListener("click", () => {
    aboutContainer.scrollIntoView({
        behavior: 'smooth'
    });
    navbar.classList.remove("navbar-expanded");
    hamburger.style.display = "inline";
    exit.style.display = "none";
});

contactNavLink.addEventListener("click", () => {
    contactContainer.scrollIntoView({
        behavior: 'smooth'
    });
    navbar.classList.remove("navbar-expanded");
    hamburger.style.display = "inline";
    exit.style.display = "none";
});

logo.addEventListener("click", () => {
    bannerContainer.scrollIntoView({
        behavior: 'smooth'
    });
    navbar.classList.remove("navbar-expanded");
    hamburger.style.display = "inline";
    exit.style.display = "none";
});

this.addEventListener("scroll", function(e) {
    const scroll = document.documentElement.scrollTop;
    const arrows = document.querySelectorAll(".arrow-container");
    if (scroll > 0) {
        document.querySelector(".navbar").style.opacity = ".7";
        arrows.forEach(arrow => {
            arrow.style.display = "";
        })
    } if (scroll === 0) {
        document.querySelector(".navbar").style.opacity = "1";
        arrows.forEach(arrow => {
            arrow.style.display = "block";
        })
    } 
});


hamburger.addEventListener("click", function(e) {
    e.preventDefault();
    hamburger.style.display = "none";
    exit.style.display = "inline";
    logo.classList.add("title-expanded");
    navbar.classList.add("navbar-expanded");
    setTimeout(function(){
        linkContainer.classList.add("link-container-expanded");
    }, 200);
});

exit.addEventListener("click", function(e) {
    e.preventDefault();
    navbar.classList.remove("navbar-expanded");
    hamburger.style.display = "inline";
    exit.style.display = "none";
    logo.classList.remove("title-expanded");
    setTimeout(function(){ 
        linkContainer.classList.remove("link-container-expanded");
    }, 400);
});



//==================================== Components

//================ Arrow


class Arrow {
    constructor(element) {
        this.element = element;
        this.arrowPopUp = this.element.querySelector(".arrow-pop-up");
        this.goToContainer = document.querySelector(`.section[data-arrow=${element.dataset.arrow}]`);
        console.log(this.arrowPopUp)
        // console.log((element.dataset));
        this.element.addEventListener("mouseenter", () => {
            this.arrowPopUp.classList.add("portfolio-arrow-hover");
        });
        this.element.addEventListener("mouseleave", () => {
            this.arrowPopUp.classList.remove("portfolio-arrow-hover");
        });
        this.element.addEventListener("click", () => {
            this.goToContainer.scrollIntoView({
                behavior: 'smooth'
                });
        });
    }
};

arrows.forEach((element)=> {
    const arrow = new Arrow(element);
})

