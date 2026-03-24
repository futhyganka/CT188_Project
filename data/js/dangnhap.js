const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputs = loginForm.querySelectorAll(".auth-input");

    let id = inputs[0].value.trim();
    let password = inputs[1].value;

    getUsers((users) => {
        let userIndex =  -1;
        users.forEach((user, i) => {
            if ((id === user.email || user.id === id) &&
                user.password === password) {
                userIndex = i;
            }
        });
        if (userIndex !== -1) {
            alert("Đăng nhập thành công!");

            // Lưu trạng thái đăng nhập
            localStorage.setItem("userCurr", users[userIndex].id);

            // Chuyển trang (ví dụ về trang chủ)
            window.location.href = "gioithieu.html";

        } else {
            alert("Sai thông tin đăng nhập!");
        }
    })

});
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


document.addEventListener("DOMContentLoaded", function() {
    const forgotLink = document.querySelector("#forgot-link");
    const forgotBox = document.querySelector("#forgot-box");
    const forgotBtn = document.querySelector("#forgot-btn");
    const forgotEmail = document.querySelector("#forgot-email");
    const newPasswordBox = document.querySelector("#new-password-box");
    const newPasswordInput = document.querySelector("#new-password");

    // Toggle hiển thị box quên mật khẩu
    forgotLink.addEventListener("click", function(e){
        e.preventDefault();
        forgotBox.style.display = forgotBox.style.display === "none" ? "block" : "none";
    });

    // Tạo mật khẩu tạm thời (demo client-side)
    function generatePassword(length = 10){
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        let pwd = "";
        for(let i=0;i<length;i++){
            pwd += chars.charAt(Math.floor(Math.random()*chars.length));
        }
        return pwd;
    }

    // Xử lý nút gửi yêu cầu
    forgotBtn.addEventListener("click", function(){
        const email = forgotEmail.value.trim();
        if(!email){
            alert("Vui lòng nhập email!");
            return;
        }
        // Demo: hiển thị mật khẩu mới
        const newPwd = generatePassword();
        newPasswordInput.value = newPwd;
        newPasswordBox.style.display = "block";
    });
});

// Toggle show/hide mật khẩu
function togglePassword(id, el){
    const input = document.getElementById(id);
    if(input.type === "password"){
        input.type = "text";
    } else {
        input.type = "password";
    }
    el.querySelectorAll("i").forEach(icon => icon.style.display = icon.style.display === "none" ? "inline" : "none");
}