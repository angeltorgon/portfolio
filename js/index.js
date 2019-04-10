
const navbar = document.querySelector(".navbar");
const title = document.querySelector(".title");
const hamburger = document.querySelector(".hamburger");
const exit = document.querySelector(".exit");
const linkContainer = document.querySelector(".link-container");
const arrow = document.querySelector(".arrow");
const portfolioArrow = document.querySelector(".portfolio-arrow");
//==================================== Navbar

this.addEventListener("scroll", function(e) {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 0) {
        document.querySelector(".navbar").style.opacity = ".7";
    } else {
        document.querySelector(".navbar").style.opacity = "1";
    }
});


hamburger.addEventListener("click", function(e) {
    e.preventDefault();
    hamburger.style.display = "none";
    exit.style.display = "inline";
    title.classList.add("title-expanded");
    navbar.classList.add("navbar-expanded");
    setTimeout(function(){
        linkContainer.classList.add("link-container-expanded");
    }, 200);
    // setTimeout(show, 3000)
});

exit.addEventListener("click", function(e) {
    e.preventDefault();
    navbar.classList.remove("navbar-expanded");
    hamburger.style.display = "inline";
    exit.style.display = "none";
    title.classList.remove("title-expanded");
    setTimeout(function(){ 
        linkContainer.classList.remove("link-container-expanded");
    }, 400);
});

//==================================== Components

//================ Arrow

class Arrow {
    constructor(element) {
        this.element = element;
    }
}

arrow.addEventListener("mouseenter", function() {
    portfolioArrow.classList.add("portfolio-arrow-hover");
});

arrow.addEventListener("mouseleave", function() {
    portfolioArrow.classList.remove("portfolio-arrow-hover");
});

arrow.addEventListener("click", function() {
    window.scroll({
        top: 1000, 
        left: 0, 
        behavior: 'smooth'
        });
});