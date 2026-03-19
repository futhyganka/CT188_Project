// login thành công
// localStorage.setItem("currentUser", JSON.stringify(user));

function goToCheckout() {
    let user = localStorage.getItem("currentUser");

    if (!user) {
        alert("Bạn cần đăng nhập trước!");
        window.location.href = "dangnhap.html";
        return;
    }

    // đã đăng nhập → qua trang thanh toán
    window.location.href = "thanhtoan.html";
}


// Lấy user từ localStorage
function getCurrentUser() {
    let user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
}

// Điền dữ liệu vào form
function fillUserInfo() {
    let user = getCurrentUser();

    if (!user) {
        console.log("Chưa đăng nhập!");
        return;
    }

    // Gán dữ liệu vào input
    document.getElementById("email").value = user.email || "";
    document.getElementById("fullname").value = user.fullname || "";
    document.getElementById("phone").value = user.phone || "";
    document.getElementById("address").value = user.address || "";
}

// Khi load trang thì chạy
window.onload = function () {
    fillUserInfo();
};