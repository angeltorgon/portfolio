
const navbar = document.querySelector(".banner");

this.addEventListener("scroll", function(e) {
    const scroll = document.documentElement.scrollTop
    if (scroll > 0) {
        document.querySelector(".navbar").style.opacity = ".7";
    } else {
        document.querySelector(".navbar").style.opacity = "1";
    }
});