/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener("DOMContentLoaded", event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector("#sideNav");
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#sideNav",
            rootMargin: "0px 0px -40%"
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map(function(responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });

});

function revealEmail() {
    let emailAddress = "ahmedmones98@gmail.com";
    let linkElement = document.getElementById("contact-me");
    linkElement.setAttribute("href", "mailto:" + emailAddress);
    linkElement.textContent = emailAddress;
}

function changeNavItemColor(element) {
    const navItems = document.querySelectorAll('.navbar-nav li a');
    navItems.forEach(item => item.style.color = '');
    element.style.color = "#f1f1f1";
}
