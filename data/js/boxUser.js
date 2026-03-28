let boxUser = document.querySelectorAll('.user-cart .user');
if(localStorage.getItem("userCurr") === null) {
    boxUser[0].classList.add('active');
}else {
    boxUser[1].classList.add('active');
}