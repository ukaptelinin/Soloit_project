let iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__items-popup');
 if(iconMenu) {
        iconMenu.addEventListener('click', function(e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        if(iconMenu.classList.contains('_active')) {
            iconMenu.textContent = '🞫';
        } else {
            iconMenu.textContent = '☰';
        }
    });
}