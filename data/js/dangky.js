// Hàm băm mật khẩu bằng SHA-256
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// nếu đã đăng nhập thì chuyển về trang giới thiệu
if(localStorage.getItem('userCurr')) {
    window.location.href = "./gioithieu.html";
}

// Đăng ký
const registerForm = document.querySelector(".register-form");
const inputs = registerForm.querySelectorAll(".auth-input");
const errors = registerForm.querySelectorAll(".error-text");
let isError = true;
let passReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[?!@#$%^&*-]).{8,}$/g;
let emailReg = /^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z]{2,4}$/g;

for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', (e) => {
        isError = false;
        if(i === 0) { //id không được có dấu cách, length từ 6 kí tự
            errors[i].innerText = "";
            if(inputs[i].value.length < 6) {
                errors[i].innerText += "Tên đăng nhập phải ít nhất 6 kí tự\n"
            }
            if(inputs[i].value.search(" ") !== -1) {
                errors[i].innerText += "Tên đăng nhập không được có dấu cách\n"
            }
            if(errors[i].innerText !== "") {
                inputs[i].classList.add('error');
            }else {
                inputs[i].classList.remove('error');
            }
        }else if(i === 1) { //tên không được trống
            errors[i].innerText = "";
            if(inputs[i].value.length === 0) {
                errors[i].innerText += "Họ tên không được để trống\n"
            }
            if(errors[i].innerText !== "") {
                inputs[i].classList.add('error');
            }else {
                inputs[i].classList.remove('error');
            }
        }else if(i === 2) { // email
            errors[i].innerText = "";
            if(!emailReg.test(inputs[i].value)) {
                errors[i].innerText += "Email chưa đúng định dạng email\n"
            }
            if(errors[i].innerText !== "") {
                inputs[i].classList.add('error');
            }else {
                inputs[i].classList.remove('error');
            }
        }else if(i === 3) { // phone
            errors[i].innerText = "";
            if(/[^0-9]/.test(inputs[i].value)) {
                errors[i].innerText += "Số điện thoại không được chứa ký tự khác số\n"
            }
            if(inputs[i].value.length < 9) {
                errors[i].innerText += "Số điện thoại phải ít nhất 9 ký tự"
            }
            if(inputs[i].value.length > 11) {
                errors[i].innerText += "Số điện thoại không quá 11 ký tự"
            }
            if(errors[i].innerText !== "") {
                inputs[i].classList.add('error');
            }else {
                inputs[i].classList.remove('error');
            }
        }else if(i === 4) { // địa chỉ
            errors[i].innerText = "";
            if(inputs[i].value.length < 12) {
                errors[i].innerText += "Vui lòng nhập rõ địa chỉ\n"
            }
            if(errors[i].innerText !== "") {
                inputs[i].classList.add('error');
            }else {
                inputs[i].classList.remove('error');
            }
        }else if(i === 5) { // pass
            errors[i].innerText = "";
            if(!passReg.test(inputs[i].value)) {
                if(inputs[i].value.length < 8) {
                    errors[i].innerText += "Mật khẩu phải chứa ít nhất 8 ký tự\n"
                }
                if(!/[A-Z]/.test(inputs[i].value)) {
                    errors[i].innerText += "Mật khẩu phải chứa ít nhất 1 ký tự viết hoa\n"
                }
                if(!/[a-z]/.test(inputs[i].value)) {
                    errors[i].innerText += "Mật khẩu phải chứa ít nhất 1 ký tự viết thường\n"
                }
                if(!/[0-9]/.test(inputs[i].value)) {
                    errors[i].innerText += "Mật khẩu phải chứa ít nhất 1 ký tự số\n"
                }
                if(!/[?!@#$%^&*-]/.test(inputs[i].value)) {
                    errors[i].innerText += "Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt (?!@#$%^&*-)\n"
                }
                if(/[^A-Za-z0-9?!@#$%^&*-]/.test(inputs[i].value)) {
                    errors[i].innerText += "Mật khẩu không được chứa bất kì ký tự nào khác nhóm trên\n"
                }
            }
            if(errors[i].innerText !== "") {
                inputs[i].classList.add('error');
            }else {
                inputs[i].classList.remove('error');
            }
        }else if(i === 6) {
            errors[i].innerText = "";
            if(errors[5].innerText === "" && inputs[5].value.length > 0) {
                if(inputs[i].value !== inputs[5].value) {
                    errors[i].innerText += "Mật khẩu chưa khớp\n"
                }
            }else {
                errors[i].innerText += "Mật khẩu chưa hoàn thành\n"
            }
            
            if(errors[i].innerText !== "") {
                inputs[i].classList.add('error');
            }else {
                inputs[i].classList.remove('error');
            }
        }
        
    })
}


registerForm.addEventListener("submit", async function(e) {
    e.preventDefault();
    // kiểm tra form
    if(isError || Array.from(errors).some((e) => e.innerText.length !== 0)) {
        console.log("return");
        return;
    }
    
    let idUser = inputs[0].value.trim();
    let name = inputs[1].value.trim();
    let email = inputs[2].value.trim();
    let phone = inputs[3].value.trim();
    let address = inputs[4].value.trim();
    let password = inputs[5].value;
    // let confirmPassword = inputs[6].value;

    const hashedPassword = await hashPassword(password);

    getUsers((users) => {

        // Kiểm tra email hoặc ID tồn tại chưa
        if (users.some(u => u.id === idUser)) {
            alert("Tên đăng nhập đã tồn tại!");
            return;
        }
        if (users.some(u => u.email === email)) {
            alert("Email đã tồn tại!");
            return;
        }

        let user = {
            'id': idUser,
            'role': "user",
            'name': name,
            'phone': phone,
            'email': email,
            'password': hashedPassword,
            'address': address,
            'order': [],
            'discount': []
        };

        createUser(user, (u) => {
            alert("Đăng ký thành công!");
            registerForm.reset();
            window.location.href = "./dangnhap.html";
        });

    });
});     

// Ấn hiện pass
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