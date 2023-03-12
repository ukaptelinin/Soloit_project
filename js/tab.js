const tabNavItem = document.querySelectorAll('.tab-nav-item');
const tabContentItem = document.querySelectorAll('.tabs__content');

tabNavItem.forEach (function(elem) {
    elem.addEventListener('click',activeTab);
});

function activeTab() {
    tabNavItem.forEach(function(elem){
        elem.classList.remove('active');
    })
    this.classList.add('active');
    let tabName = this.getAttribute('data-tab');
    activeTabContent(tabName);
}

function activeTabContent(tabName) {
    tabContentItem.forEach(function(item) {
        if (item.classList.contains(tabName)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    })
}
