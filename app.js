windows.onscroll = function() {
    stickynavbar()
} 

var navbar = document.getElementById("navbar")

var sticky_navbar = navbar.offsetTop


function stickynavbar() {
    if (window.pageYOffset >= sticky_navbar) {
        navbar.classList.add("sticky-navbar")
    } else {
        navbar.classList.remove("sticky-navbar")
    }
}


