const loginForm = document.querySelector(".login-form");

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

function showError(input, msg) {
    const errorDiv = input.nextElementSibling;
    input.classList.add("error");
    input.classList.remove("valid");
    if (errorDiv) errorDiv.innerText = msg;
}

function clearError(input) {
    const errorDiv = input.nextElementSibling;
    input.classList.remove("error");
    input.classList.add("valid");
    if (errorDiv) errorDiv.innerText = "";
}

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputs = loginForm.querySelectorAll(".auth-input");

    let inputLogin = inputs[0].value.trim();
    let password = inputs[1].value;

    let isValid = true;

    if (!inputLogin) {
        showError(inputs[0], "Vui lòng nhập email hoặc tên đăng nhập");
        isValid = false;
    } else {
        clearError(inputs[0]);
    }

    if (!password) {
        showError(inputs[1], "Vui lòng nhập mật khẩu");
        isValid = false;
    } else {
        clearError(inputs[1]);
    }

    if (!isValid) return;

    // 👉 LẤY USER TỪ REGISTER
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) {
        alert("Chưa có tài khoản nào!");
        return;
    }

    const user = users.find(u => 
        (u.email === inputLogin || u.id === inputLogin) 
        && u.password === password
    );

    if (!user) {
        showError(inputs[1], "Sai tài khoản hoặc mật khẩu");
        return;
    }

    clearError(inputs[1]);

    // 👉 Lưu user đang đăng nhập
    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Đăng nhập thành công!");

    window.location.href = "./gioithieu.html";
});




document.getElementById("forgot-link").addEventListener("click", function(e) {
    e.preventDefault();

    document.getElementById("forgot-box").style.display = "block";
});


document.getElementById("forgot-btn").addEventListener("click", function() {
    let email = document.getElementById("forgot-email").value.trim();
    let newPasswordBox = document.getElementById("new-password-box");
    let errorMsg = document.getElementById("error-msg");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (!email) {
        errorMsg.innerText = "Vui lòng nhập email!";
        return;
    }

    let user = users.find(u => u.email === email);

    if (!user) {
        errorMsg.innerText = "Không tìm thấy tài khoản!";
        return;
    }

    newPasswordBox.style.display = "block";

    let newPassword = document.getElementById("new-password").value;

    if (!newPassword) return;

    if (newPassword.length < 6) {
        errorMsg.innerText = "Mật khẩu phải từ 6 ký tự!";
        return;
    }

    user.password = newPassword;

    localStorage.setItem("users", JSON.stringify(users));

    errorMsg.innerText = "Đổi mật khẩu thành công!";
});
document.getElementById("reset-btn").addEventListener("click", function() {
    let email = document.getElementById("forgot-email").value.trim();
    let newPassword = document.getElementById("new-password").value;
    let errorMsg = document.getElementById("error-msg");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => u.email === email);

    if (!user) {
        errorMsg.innerText = "Không tìm thấy tài khoản!";
        return;
    }

    if (!newPassword) {
        errorMsg.innerText = "Vui lòng nhập mật khẩu mới!";
        return;
    }

    if (newPassword.length < 6) {
        errorMsg.innerText = "Mật khẩu phải từ 6 ký tự!";
        return;
    }

    user.password = newPassword;

    localStorage.setItem("users", JSON.stringify(users));

    errorMsg.innerText = "Đổi mật khẩu thành công!";
});