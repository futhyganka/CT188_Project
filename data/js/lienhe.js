let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("message");

name.oninput = () => validateName();
email.oninput = () => validateEmail();
phone.oninput = () => validatePhone();
message.oninput = () => validateMessage();

function validateName() {
    if (name.value.trim() === "") {
        setError(name, "nameErr", "Không được để trống");
        return false;
    }
    clearError(name, "nameErr");
    return true;
}

function validateEmail() {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        setError(email, "emailErr", "Không được để trống");
        return false;
    }
    if (!regex.test(email.value)) {
        setError(email, "emailErr", "Email không hợp lệ");
        return false;
    }
    clearError(email, "emailErr");
    return true;
}

function validatePhone() {
    let regex = /^[0-9]{9,11}$/;

    if (phone.value.trim() === "") {
        setError(phone, "phoneErr", "Không được để trống");
        return false;
    }
    if (!regex.test(phone.value)) {
        setError(phone, "phoneErr", "SĐT không hợp lệ");
        return false;
    }
    clearError(phone, "phoneErr");
    return true;
}

function validateMessage() {
    if (message.value.trim() === "") {
        setError(message, "messageErr", "Không được để trống");
        return false;
    }
    clearError(message, "messageErr");
    return true;
}

document.getElementById("contactForm").onsubmit = function(e) {
    e.preventDefault();

    let isValid =
        validateName() &
        validateEmail() &
        validatePhone() &
        validateMessage();

    if (isValid) {
        document.getElementById("status").innerText = "Gửi thành công!";
        this.reset();
        document.querySelectorAll(".error-text").forEach(e => e.innerText = "");
    }
};

function setError(input, id, msg) {
    input.classList.add("error");
    input.classList.remove("valid");
    document.getElementById(id).innerText = msg;
}

function clearError(input, id) {
    input.classList.remove("error");
    input.classList.add("valid"); 
    document.getElementById(id).innerText = "";
}