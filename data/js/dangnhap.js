// Hàm băm mật khẩu bằng SHA-256
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// đăng nhập
const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    const inputs = loginForm.querySelectorAll(".auth-input");
    let id = inputs[0].value.trim();
    let password = inputs[1].value;

    const hashedPassword = await hashPassword(password);

    getUsers((users) => {
        let userIndex =  -1;
        users.forEach((user, i) => {
            if (id === user.email || user.id === id) {
                userIndex = i;
            }
        });
        if (userIndex !== -1) {
            if(users[userIndex].password !== hashedPassword) {
                alert("Sai mật khẩu!");
            }else {
                alert("Đăng nhập thành công!");

                // Lưu trạng thái đăng nhập
                localStorage.setItem("userCurr", users[userIndex].id);

                // Chuyển trang (ví dụ về trang chủ)
                window.location.href = "gioithieu.html";
            
            }

        } else {
            alert("Sai thông tin đăng nhập!");
        }
    })

});

// Ẩn hiện pass
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

// Quên mật khẩu 
const forgotBtn = document.getElementById("forgot-btn");
const resetBtn = document.getElementById("reset-btn");
const confirmBtn = document.getElementById("confirm-btn");
const emailInput = document.getElementById("forgot-email");
const newPasswordBox = document.getElementById("new-password-box");
const newPasswordInput = document.getElementById("new-password");
const confirmBox = document.getElementById("confirm-box");
const confirmInput = document.getElementById("confirm");
const reConfirmBth = document.getElementById("re-confirm-btn");
const errorMsg = document.getElementById("error-msg");
let currentUserIndex = -1;
let idConfirm;

// Mở quên mật khẩu
document.getElementById("forgot-link").onclick = function() {
    document.querySelector('form.login-form').onsubmit = (e) => {
        e.preventDefault();
    }
    const box = document.getElementById("forgot-box");

    if (box.style.display === "block") {
        box.style.display = "none";
    } else {
        box.style.display = "block";
    }
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

    getUsers((users) => {
        users.forEach((u, i) => {
            if (u.email === email) currentUserIndex = i;
        });

        if (currentUserIndex === -1) {
            errorMsg.style.display = 'block';
            errorMsg.style.color = "#d51c24";
            errorMsg.innerText = "Email không tồn tại!";
        } else {
            errorMsg.style.display = 'none';
            confirmBox.style.display = "block";
            newPasswordBox.style.display = "none";
            resetIdConfirm();
        }
    });
};

function resetIdConfirm() {
    idConfirm = Math.floor(Math.random() * 1000000);
    confirmInput.placeholder = "Nhập mã xác nhận (" + idConfirm + ")";
    confirmInput.value = "";
    let i = 60;
    reConfirmBth.onclick = null;
    reConfirmBth.style.backgroundColor = "var(--grey-color)";
    reConfirmBth.style.cursor = "default";
    reConfirmBth.innerText = "60s";
    let timer = setInterval(() => {
        i--;
        if(i == 0) {
            clearInterval(timer);
            reConfirmBth.onclick = resetIdConfirm;
            reConfirmBth.style.backgroundColor = "var(--main-color)";
            reConfirmBth.style.cursor = "pointer";
            reConfirmBth.innerText = "Gửi lại mã";
            return;
        }
        reConfirmBth.innerText = i + "s";
    }, 1000)
}

reConfirmBth.onclick = resetIdConfirm;

confirmBtn.onclick = function() {
    if(idConfirm == confirmInput.value) {
        errorMsg.style.display = 'block';
        errorMsg.style.color = "green";
        errorMsg.innerText = "Mã xác nhận hợp lệ! Nhập mật khẩu mới.";
        confirmBox.style.display = "none";
        newPasswordBox.style.display = "block";
    }else {
        confirmInput.value = "";
        errorMsg.style.display = 'block';
        errorMsg.style.color = "#d51c24";
        errorMsg.innerText = "Mã xác nhận không hợp lệ!";
    }
}

// Gửi mật khẩu mới
resetBtn.onclick = async function () {
    const password = newPasswordInput.value;

    if (currentUserIndex === -1) {
        errorMsg.innerText = "Có lỗi xảy ra!";
        errorMsg.style.color = "#d51c24";
        return;
    }

    if (!(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[?!@#$%^&*-]).{8,}$/.test(password))) {
        errorMsg.innerText = "Mật khẩu chưa đúng định dạng! (8 ký tự, chữ hoa, chữ thường, số, ký tự đặc biệt(?!@#$%^&*-))";
        errorMsg.style.color = "#d51c24";
        return;
    }

    const hashedPassword = await hashPassword(password);

    getUsers((users) => {

        let id = users[currentUserIndex].id;
        let pw = {"password" : hashedPassword};
        console.log(pw);

        setUser(id, pw, (newUser) => {
            errorMsg.innerText = "Đổi mật khẩu thành công!";
            errorMsg.style.color = "green";

            newPasswordInput.value = "";
            emailInput.value = "";
            newPasswordBox.style.display = "none";
        });
        
    });
};