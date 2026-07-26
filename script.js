// Testimonials Carousel

const track = document.querySelector(".carousel-track");

const testimonials = document.querySelectorAll(".testimonial");

const nextButton = document.querySelector("#next");

const prevButton = document.querySelector("#prev");


let currentIndex = 0;


function updateCarousel(){

track.style.transform = 
`translateX(-${currentIndex * 100}%)`;

}



nextButton.addEventListener("click", function(){

currentIndex++;

if(currentIndex >= testimonials.length){

currentIndex = 0;

}

updateCarousel();

});



prevButton.addEventListener("click", function(){

currentIndex--;

if(currentIndex < 0){

currentIndex = testimonials.length - 1;

}

updateCarousel();

});



// automatic movement every 5 seconds

setInterval(function(){

currentIndex++;

if(currentIndex >= testimonials.length){

currentIndex = 0;

}

updateCarousel();

},5000);



// ===========================
// CONTACT FORM
// ===========================

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        const data = new FormData(form);

        try {

            const response = await fetch(form.action, {

                method: "POST",
                body: data,
                headers: {
                    "Accept": "application/json"
                }

            });

            if (response.ok) {

                window.location.href = "thank-you.html";

            } else {

                alert("Sorry, something went wrong. Please try again.");

            }

        } catch (error) {

            alert("Unable to send your message. Please try again later.");

        }

    });

}


// MOBILE HAMBURGER MENU

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


// CLOSE MENU AFTER CLICKING A LINK

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});