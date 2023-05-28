const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    //on met la function toggleMenu qui va switcher la classe hidden et flex
    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toogleBtn')
    }

    //on ajoute des events "click" au button hamberger et block menu pour qu'il execute la fonction toogleMenu a chaque click
    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

//maintent on execute la fonction "initApp" ssi le DOM est complètement chargé
document.addEventListener('DOMContentLoaded', initApp)