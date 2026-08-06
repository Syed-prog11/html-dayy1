// Welcome Button Event + Smooth Scroll
const welcomeBtn = document.getElementById("welcomeBtn");

welcomeBtn.addEventListener("click", function () {
    alert("Welcome to my portfolio website!");

    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});


// DOM Manipulation
document.querySelector(".hero h2").textContent =
    "Hello, I'm Syed Wasiudeen 👋";


// Scroll-to-Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

};


// Function to Scroll Back to Top
function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// Current Year in Footer
const year = new Date().getFullYear();

document.getElementById("year").textContent = year;