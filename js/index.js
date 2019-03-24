
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const exit = document.querySelector(".exit");
const linkContainer = document.querySelector(".link-container")

const show = function() {
    hamburger.style.display = "none";
    exit.style.display = "inline";
}

const hide = function() {
    hamburger.style.display = "inline";
    exit.style.display = "none";
}

this.addEventListener("scroll", function(e) {
    const scroll = document.documentElement.scrollTop
    if (scroll > 0) {
        document.querySelector(".navbar").style.opacity = ".7";
    } else {
        document.querySelector(".navbar").style.opacity = "1";
    }
});

hamburger.addEventListener("click", function(e) {
    e.preventDefault();
    navbar.classList.add("navbar-expanded");
    hamburger.style.display = "none";
    exit.style.display = "inline";
    // setTimeout(show, 3000)
})

exit.addEventListener("click", function(e) {
    e.preventDefault();
    navbar.classList.remove("navbar-expanded");
    hamburger.style.display = "inline";
    exit.style.display = "none";
    // setTimeout(hide, 3000)
})