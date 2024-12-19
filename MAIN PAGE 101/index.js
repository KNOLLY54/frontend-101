// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the target element's id from the href attribute
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Scroll to the target element
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Scroll-to-Top Button functionality
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

// Show/Hide the scroll-to-top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll-to-top button click event
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dynamic Animation on Scroll (fade-in effect)
const elementsToAnimate = document.querySelectorAll('.fade-in');
const animateOnScroll = () => {
    elementsToAnimate.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animated');
        } else {
            element.classList.remove('animated');
        }
    });
};

// Call animateOnScroll on page load and scroll event
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Responsive Navbar Toggle
const navbarToggle = document.createElement('button');
navbarToggle.classList.add('navbar-toggle');
navbarToggle.textContent = '☰';
document.querySelector('.navbar').appendChild(navbarToggle);

navbarToggle.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Toggle animations for logo on scroll (adding a bounce effect)
const logo = document.getElementById('logo');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        logo.classList.add('bounce');
    } else {
        logo.classList.remove('bounce');
    }
});





