const copyText = document.querySelectorAll('.copy-text');

if (copyText.length > 0) {
    for (let index = 0; index < copyText.length; index++) {
        let copyTextEl = copyText[index];
        copyTextEl.onclick = function() {
            navigator.clipboard.writeText(copyTextEl.parentElement.textContent.substring(1));
        };
    }
}