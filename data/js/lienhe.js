const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
messageInput.addEventListener("input", validateMessage);

function validateName() {
    if (nameInput.value.trim() === "") {
        setError(nameInput, "nameErr", "Không được để trống (Nhập họ tên đầy đủ)");
        return false;
    }
    clearError(nameInput, "nameErr");
    return true;
}

function validateEmail() {
    const regex = /^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z]{2,4}$/g;

    if (emailInput.value.trim() === "") {
        setError(emailInput, "emailErr", "Không được để trống (abc@gmail.com)");
        return false;
    }
    if (!regex.test(emailInput.value)) {
        setError(emailInput, "emailErr", "Email không hợp lệ (abc@gmail.com)");
        return false;
    }
    clearError(emailInput, "emailErr");
    return true;
}

function validatePhone() {
    const regex = /^[0-9]{9,11}$/;

    if (phoneInput.value.trim() === "") {
        setError(phoneInput, "phoneErr", "Không được để trống (9-11 số)");
        return false;
    }
    if (!regex.test(phoneInput.value)) {
        setError(phoneInput, "phoneErr", "SĐT không hợp lệ (chỉ nhập số)");
        return false;
    }
    clearError(phoneInput, "phoneErr");
    return true;
}

function validateMessage() {
    if (messageInput.value.trim() === "") {
        setError(messageInput, "messageErr", "Không được để trống");
        return false;
    }
    clearError(messageInput, "messageErr");
    return true;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const isValid =
        validateName() &&
        validateEmail() &&
        validatePhone() &&
        validateMessage();

    if (isValid) {
        document.getElementById("status").innerText = "Gửi thành công!";

        form.reset();

        document.querySelectorAll(".contact-page input, .contact-page textarea")
            .forEach(el => el.classList.remove("valid"));

        document.querySelectorAll(".error-text")
            .forEach(el => el.innerText = "");
    }
});

function setError(input, errorId, message) {
    input.classList.add("error");
    input.classList.remove("valid");
    document.getElementById(errorId).innerText = message;
}

function clearError(input, errorId) {
    input.classList.remove("error");
    input.classList.add("valid");
    document.getElementById(errorId).innerText = "";
}