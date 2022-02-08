const heroNavigationBarBurger = document.getElementById('hero-navigation-bar-burger');
const heroMobileNavigationBar = document.getElementById('hero-mobile-navigation-bar');

heroNavigationBarBurger.addEventListener('click', function() {
    heroMobileNavigationBar.classList.toggle('hidden')
})