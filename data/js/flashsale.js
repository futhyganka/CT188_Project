

function saveCode(code, btn) {
    // Lấy id user đang đăng nhập
    let currentUserId = localStorage.getItem("userCurr");

    // ❌ Chưa đăng nhập → chuyển trang
    if (!currentUserId) {
        alert("Vui lòng đăng nhập để lưu mã!");
        window.location.href = "./dangnhap.html";
        return;
    }

    // Lấy user từ database
    getUser(currentUserId, function(user) {
        if (!user) {
            alert("Không tìm thấy user!");
            return;
        }

        // Nếu chưa có coupons thì tạo
        if (!user.coupons) {
            user.coupons = [];
        }

        // Kiểm tra trùng
        if (user.coupons.includes(code)) {
            alert("Bạn đã lưu mã này rồi!");
            return;
        }

        // Thêm mã
        user.coupons.push(code);

        // Lưu lại DB
        setUser(user.id, { coupons: user.coupons }, function(updatedUser) {
            console.log("Đã lưu mã:", updatedUser);

            // Đổi UI nút
            btn.innerText = "Đã lưu";
            btn.disabled = true;
            btn.style.backgroundColor = "#ccc";
            btn.style.cursor = "not-allowed";
        });
    });
}

window.onload = function () {
    let currentUserId = localStorage.getItem("userCurr");

    if (!currentUserId) return;

    getUser(currentUserId, function(user) {
        if (!user || !user.coupons) return;

        let vouchers = document.querySelectorAll(".voucher");

        vouchers.forEach(v => {
            let code = v.querySelector(".code").innerText.trim(); 
            let btn = v.querySelector("button");

            if (user.coupons.includes(code)) {
                btn.innerText = "Đã lưu";
                btn.disabled = true;
                btn.style.backgroundColor = "#ccc";
                btn.style.cursor = "not-allowed";
            }
        });
    });
};