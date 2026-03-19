// Lấy form đăng ký
const registerForm = document.querySelector(".register-form");

registerForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputs = registerForm.querySelectorAll(".auth-input");

    let fullname = inputs[0].value.trim();
    let email = inputs[1].value.trim();
    let phone = inputs[2].value.trim();
    let address = inputs[3].value.trim();
    let password = inputs[4].value;
    let confirmPassword = inputs[5].value;

    // Kiểm tra password nhập lại
    if (password !== confirmPassword) {
        alert("Mật khẩu không khớp!");
        return;
    }

    // Lấy danh sách user cũ
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra email đã tồn tại chưa
    let isExist = users.some(user => user.email === email);

    if (isExist) {
        alert("Email đã tồn tại!");
        return;
    }

    // Tạo user mới
    let newUser = {
        fullname,
        email,
        phone,
        address,
        password
    };

    // Thêm vào danh sách
    users.push(newUser);

    // Lưu lại
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");

    // Reset form
    registerForm.reset();

    // Chuyển sang trang login
    window.location.href = "dangnhap.html";
});