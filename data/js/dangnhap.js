document.addEventListener("DOMContentLoaded", function() {
    // --- Biến chung ---
    const loginForm = document.querySelector(".login-form");
    const forgotLink = document.querySelector("#forgot-link");
    const forgotBox = document.querySelector("#forgot-box");
    const forgotBtn = document.querySelector("#forgot-btn");
    const forgotEmail = document.querySelector("#forgot-email");
    const newPasswordBox = document.querySelector("#new-password-box");
    const newPasswordInput = document.querySelector("#new-password");
    const errorDiv = document.querySelector("#error-msg");

    // --- Toggle show/hide mật khẩu ---
    function togglePassword(id, el) {
        const input = document.getElementById(id);
        const icons = el.querySelectorAll("i");
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

    // --- Đăng nhập ---
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const inputs = loginForm.querySelectorAll(".auth-input");
        let id = inputs[0].value.trim();
        let password = inputs[1].value;

        getUsers((users) => {
            let userIndex = -1;
            users.forEach((user, i) => {
                if ((id === user.email || user.id === id) && user.password === password) {
                    userIndex = i;
                }
            });
            if (userIndex !== -1) {
                alert("Đăng nhập thành công!");
                localStorage.setItem("userCurr", users[userIndex].id);
                window.location.href = "gioithieu.html";
            } else {
                alert("Sai thông tin đăng nhập!");
            }
        });
    });

    // --- Hiển thị/ẩn box quên mật khẩu ---
    forgotLink.addEventListener("click", function(e) {
        e.preventDefault();
        forgotBox.style.display = forgotBox.style.display === "none" ? "block" : "none";
    });

    // --- Quên mật khẩu: gửi request tới PHP ---
    forgotBtn.addEventListener("click", function() {
        const email = forgotEmail.value.trim();
        if (!email) {
            errorDiv.textContent = "Vui lòng nhập email!";
            newPasswordBox.style.display = "none";
            return;
        }

        fetch("forgot.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: "email=" + encodeURIComponent(email)
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                errorDiv.textContent = "";
                newPasswordInput.value = data.message;
                newPasswordBox.style.display = "block";
            } else {
                errorDiv.textContent = data.message;
                newPasswordBox.style.display = "none";
            }
        })
        .catch(err => {
            errorDiv.textContent = "Lỗi server!";
            newPasswordBox.style.display = "none";
        });
    });
});