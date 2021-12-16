// creat var to hold thing that is going to be clicked
const hamburgerMenu = document.querySelector('#burgerMenu');

// listen for click 
hamburgerMenu.addEventListener(`click`, function() {
    // create var to hold nav menu
    const slideOutNav = document.querySelector('#navMenu');
    // create toggle so that navBar slides in and out when clicked
    slideOutNav.classList.toggle(`slideOut`);
});

hamburgerMenu();