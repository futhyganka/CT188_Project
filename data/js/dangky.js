const registerForm = document.querySelector(".register-form");

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

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

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

    let isValid = true; 

    if (!idUser) { showError(inputs[0], "Tên đăng nhập không được để trống"); isValid = false; } else { clearError(inputs[0]); }
    if (!name) { showError(inputs[1], "Họ và tên không được để trống"); isValid = false; } else { clearError(inputs[1]); }
    
    if (!email) { showError(inputs[2], "Email không được để trống"); isValid = false; }
    else if (!validateEmail(email)) { showError(inputs[2], "Email không hợp lệ"); isValid = false; }
    else { clearError(inputs[2]); }

    if (!phone) { showError(inputs[3], "SĐT không được để trống"); isValid = false; }
    else if (!/^\d{9,11}$/.test(phone)) { showError(inputs[3], "SĐT phải 9-11 số"); isValid = false; }
    else { clearError(inputs[3]); }

    if (!address) { showError(inputs[4], "Địa chỉ không được để trống"); isValid = false; } else { clearError(inputs[4]); }

    if (!password) { showError(inputs[5], "Mật khẩu không được để trống"); isValid = false; }
    else if (password.length < 6) { showError(inputs[5], "Mật khẩu phải ≥6 ký tự"); isValid = false; }
    else { clearError(inputs[5]); }

    if (!confirmPassword) { showError(inputs[6], "Vui lòng nhập lại mật khẩu"); isValid = false; }
    else if (password !== confirmPassword) { showError(inputs[6], "Mật khẩu không khớp"); isValid = false; }
    else { clearError(inputs[6]); }

    if (isValid) {
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
            registerForm.reset();
            window.location.href = "dangnhap.html";
        })
    }
});