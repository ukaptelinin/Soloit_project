let popup = document.getElementById('mypopup');
let popupToggle = document.querySelectorAll('.look');
let popupClose = document.querySelector('.close');


if (popupToggle.length > 0) {
    for (let index = 0; index < popupToggle.length; index++) {
        const popupToggleEl = popupToggle[index];
        popupToggleEl.onclick = function() {
            popup.style.display = "block";
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