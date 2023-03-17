const hamburger = document.getElementById('span-burger')
const navLinks = document.getElementById('nav-links')

const toggleNavbar = () => {
    // alert('toggled')
    hamburger.classList.toggle('active')
    navLinks.classList.toggle('active')
}