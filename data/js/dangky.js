// Lấy form đăng ký
const registerForm = document.querySelector(".register-form");

registerForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputs = registerForm.querySelectorAll(".auth-input");

    let idUser = inputs[0].value.trim();
    let name = inputs[1].value.trim();
    let email = inputs[2].value.trim();
    let phone = inputs[3].value.trim();
    let address = inputs[4].value.trim();
    let password = inputs[5].value;
    let confirmPassword = inputs[6].value;

    // Kiểm tra password nhập lại
    if (password !== confirmPassword) {
        alert("Mật khẩu không khớp!");
        return;
    }

    let user = {
      "id": idUser,
      "role": "user",
      "name": name,
      "phone": phone,
      "email": email,
      "password": password,
      "address": address,
      "order": []
    }

    createUser(user, (users) => {
        alert("Đăng ký thành công!");
        // Reset form
        registerForm.reset();

        // Chuyển sang trang login
        window.location.href = "dangnhap.html";
    })

});
// Ẩn hiện mật khẩu
function togglePassword(id, el) {
    let input = document.getElementById(id);
    let icons = el.querySelectorAll("i");

    if (input.type === "password") {
        input.type = "text";
        icons[0].style.display = "none";
        icons[1].style.display = "inline";
    } else {
        input.type = "password";
        icons[0].style.display = "inline";
        icons[1].style.display = "none";
    }
}