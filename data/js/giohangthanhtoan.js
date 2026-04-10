let btnCheckout = document.querySelector('.summary-box .checkout-btn');

btnCheckout.addEventListener('click', () => {
    if(!localStorage.getItem('userCurr')) {
        alert('Bạn cần đăng nhập trước khi thanh toán!');
        window.location.href = './dangnhap.html';
    } else {
        window.location.href = './thanhtoan.html';
    }
})