let popup = document.getElementById('mypopup');
let popupToggle = document.querySelectorAll('.look');
let popupClose = document.querySelector('.close');

let popupCop = document.getElementById('mypopupcop');
let popupToggleCop = document.querySelectorAll('.service');

if (popupToggle.length > 0) {
    for (let index = 0; index < popupToggle.length; index++) {
        const popupToggleEl = popupToggle[index];
        popupToggleEl.onclick = function() {
            popup.style.display = "block";
        };
    }
}

if (popupToggleCop.length > 0) {
    for (let index = 0; index < popupToggleCop.length; index++) {
        const popupToggleEl = popupToggleCop[index];
        popupToggleEl.onclick = function() {
            popupCop.style.display = "block";
        };
    }
}


popupClose.onclick = function() {
    popup.style.display = "none";
}

window.onclick = function(e) {
    if ( e.target == popup) {
        popup.style.display = "none";
    }
}