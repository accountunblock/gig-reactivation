console.log('Hello World!');
// Toggle the visibility of the navigation links when the hamburger is clicked
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});