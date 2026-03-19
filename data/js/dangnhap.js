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
