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

// Lấy user từ localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputs = loginForm.querySelectorAll(".auth-input");

    let inputLogin = inputs[0].value.trim(); // email hoặc username
    let password = inputs[1].value;

    let isValid = true;

    // ===== Validate =====
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

    // ===== Xử lý login =====
    const users = getUsers();

    if (users.length === 0) {
        alert("Chưa có tài khoản nào!");
        return;
    }

    // tìm theo email hoặc username (id)
    const user = users.find(u => 
        (u.email === inputLogin || u.id === inputLogin) 
        && u.password === password
    );

    if (!user) {
        showError(inputs[1], "Sai tài khoản hoặc mật khẩu");
        return;
    }

    // ===== Thành công =====
    clearError(inputs[1]);

    // lưu trạng thái đăng nhập
    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Đăng nhập thành công!");

    // chuyển trang (tùy bạn sửa)
    window.location.href = "CT188_Project/nguoidung.html";
});