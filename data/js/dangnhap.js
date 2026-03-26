// ---------------- Hàm băm mật khẩu bằng SHA-256 ----------------
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// ---------------- Lấy users từ localStorage ----------------
function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

// ---------------- Login ----------------
const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    const inputs = loginForm.querySelectorAll(".auth-input");
    let id = inputs[0].value.trim();
    let password = inputs[1].value;

    const hashedPassword = await hashPassword(password); // 🔹 băm trước khi so sánh

    let users = getUsers();
    let userIndex = users.findIndex(u => (u.email === id || u.id === id) && u.password === hashedPassword);

    if (userIndex !== -1) {
        alert("Đăng nhập thành công!");
        localStorage.setItem("userCurr", users[userIndex].id);
        window.location.href = "gioithieu.html";
    } else {
        alert("Sai thông tin đăng nhập!");
    }
});

// ---------------- Toggle password ----------------
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

// ---------------- Quên mật khẩu ----------------
const forgotBtn = document.getElementById("forgot-btn");
const resetBtn = document.getElementById("reset-btn");
const emailInput = document.getElementById("forgot-email");
const newPasswordBox = document.getElementById("new-password-box");
const newPasswordInput = document.getElementById("new-password");
const errorMsg = document.getElementById("error-msg");
let currentUserIndex = -1;

// Mở quên mật khẩu
document.getElementById("forgot-link").onclick = function(e) {
    e.preventDefault();
    document.getElementById("forgot-box").style.display = "block";
};

// Gửi yêu cầu quên mật khẩu
forgotBtn.onclick = function () {
    let email = emailInput.value.trim();
    errorMsg.innerText = "";
    errorMsg.style.color = "#d51c24";
    currentUserIndex = -1;

    if (email === "") {
        errorMsg.innerText = "Vui lòng nhập email!";
        return;
    }

    let users = getUsers();
    users.forEach((u, i) => {
        if (u.email === email) currentUserIndex = i;
    });

    if (currentUserIndex === -1) {
        errorMsg.innerText = "Email không tồn tại!";
    } else {
        errorMsg.style.color = "green";
        errorMsg.innerText = "Email hợp lệ! Nhập mật khẩu mới.";
        newPasswordBox.style.display = "block";
    }
};

// Gửi mật khẩu mới
resetBtn.onclick = async function () {
    const password = newPasswordInput.value;

    if (currentUserIndex === -1) {
        errorMsg.innerText = "Có lỗi xảy ra!";
        errorMsg.style.color = "#d51c24";
        return;
    }

    if (password.length < 6 
        || !/[a-z]/.test(password) 
        || !/[A-Z]/.test(password)
        || !/[0-9]/.test(password) 
        || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errorMsg.innerText = "Mật khẩu chưa đúng định dạng! (6 ký tự, chữ hoa, chữ thường, số, ký tự đặc biệt)";
        errorMsg.style.color = "#d51c24";
        return;
    }

    const hashedPassword = await hashPassword(password); // 🔹 băm trước khi lưu

    let users = getUsers();
    users[currentUserIndex].password = hashedPassword;
    localStorage.setItem("users", JSON.stringify(users));

    errorMsg.innerText = "Đổi mật khẩu thành công!";
    errorMsg.style.color = "green";

    newPasswordInput.value = "";
    emailInput.value = "";
    newPasswordBox.style.display = "none";
};