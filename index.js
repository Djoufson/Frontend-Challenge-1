const hamburger = document.getElementById('span-burger')
const navLinks = document.getElementById('nav-links')
const backToTopBtn = document.getElementById('back-to-top')

window.addEventListener('scroll', e => {
    // When we reach a certain position at scroll, we set
    // the back to top button to active
})

const toggleNavbar = () => {
    hamburger.classList.toggle('active')
    navLinks.classList.toggle('active')
}