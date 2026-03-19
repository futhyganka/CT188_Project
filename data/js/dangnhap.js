const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputs = loginForm.querySelectorAll(".auth-input");

    let fullname = inputs[0].value.trim();
    let email = inputs[1].value.trim();
    let password = inputs[2].value;

    // Lấy danh sách user
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Tìm user
    let user = users.find(u => 
        u.email === email &&
        u.password === password &&
        u.fullname === fullname
    );

    if (user) {
        alert("Đăng nhập thành công!");

        // Lưu trạng thái đăng nhập
        localStorage.setItem("currentUser", JSON.stringify(user));

        // Chuyển trang (ví dụ về trang chủ)
        window.location.href = "http://127.0.0.1:5500/CT188_Project/gioithieu.html";

    } else {
        alert("Sai thông tin đăng nhập!");
    }
});

// trang chủ
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
    console.log("Xin chào", currentUser.fullname);
}


function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "dangnhap.html";
}

if (user) {
    alert("Đăng nhập thành công!");

    // Lưu user đang đăng nhập
    localStorage.setItem("currentUser", JSON.stringify(user));

    // 👉 Chuyển về trang chủ
    window.location.href = "http://127.0.0.1:5500/CT188_Project/gioithieu.html";
}