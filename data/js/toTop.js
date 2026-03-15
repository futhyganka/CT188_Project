const btnToTop = document.querySelector('#fixed .btn-back-to-top');

btnToTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        btnToTop.style.display = "block";
    } else {
        btnToTop.style.display = "none";
    }
});