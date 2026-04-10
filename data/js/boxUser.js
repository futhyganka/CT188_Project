let boxUser = document.querySelectorAll('.user-cart .user');
function displayBoxUser() {
    boxUser[0].classList.remove('active');
    boxUser[1].classList.remove('active');
    if(localStorage.getItem("userCurr") === null) {
        boxUser[0].classList.add('active');
    }else {
        boxUser[1].classList.add('active');
    }
}

displayBoxUser();

window.addEventListener('storage', (e) => {
    displayBoxUser();
});