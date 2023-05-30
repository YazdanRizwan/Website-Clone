
const toggleButton = document.getElementById('nav-toggle-button');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})