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

// ---------------- Đăng ký ----------------
const registerForm = document.querySelector(".register-form");
registerForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    const inputs = registerForm.querySelectorAll(".auth-input");
    let idUser = inputs[0].value.trim();
    let name = inputs[1].value.trim();
    let email = inputs[2].value.trim();
    let phone = inputs[3].value.trim();
    let address = inputs[4].value.trim();
    let password = inputs[5].value;
    let confirmPassword = inputs[6].value;

    if (password !== confirmPassword) {
        alert("Mật khẩu không khớp!");
        return;
    }

    // 🔹 Ràng buộc mật khẩu
    if (password.length < 6 
        || !/[a-z]/.test(password) 
        || !/[A-Z]/.test(password)
        || !/[0-9]/.test(password) 
        || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        alert("Mật khẩu chưa đúng định dạng! (6 ký tự, chữ hoa, chữ thường, số, ký tự đặc biệt)");
        return;
    }

    let users = getUsers();

    // Kiểm tra email hoặc ID tồn tại chưa
    if (users.some(u => u.email === email || u.id === idUser)) {
        alert("Email hoặc ID đã tồn tại!");
        return;
    }

    const hashedPassword = await hashPassword(password); // 🔹 băm mật khẩu trước lưu

    let user = {
        id: idUser,
        role: "user",
        name: name,
        phone: phone,
        email: email,
        password: hashedPassword,
        address: address,
        order: []
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");
    registerForm.reset();
    window.location.href = "dangnhap.html";
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