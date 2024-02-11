const showPopup = document.querySelector('.show-popup');
const popupContainer = document.querySelector('.popup-container');
const homePage = document.querySelector('checkout.html');
const closeBtn = document.querySelector('.close-btn');

showPopup.onclick = () => {
    popupContainer.classList.add('active');
}

function returnHome() {
    window.location.href = "web.html";
}