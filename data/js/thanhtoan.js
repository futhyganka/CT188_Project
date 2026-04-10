document.addEventListener("DOMContentLoaded", function () {
    let userId = localStorage.getItem("userCurr");

    if (!userId) {
        console.log("Chưa đăng nhập");
        return;
    }

    let db = JSON.parse(localStorage.getItem("jsondatabase"));

    if (!db || !db.users) {
        console.log("Không có database");
        return;
    }

    let user = db.users.find(u => u.id === userId);

    if (!user) {
        console.log("Không tìm thấy user");
        return;
    }

    // Gán dữ liệu
    document.getElementById("email").value = user.email || "";
    document.getElementById("fullname").value = user.name || "";
    document.getElementById("phone").value = user.phone || "";
    document.getElementById("address").value = user.address || "";
});




//gợi ý mã giảm giá
couponSuggest.classList.add("show");
document.addEventListener("DOMContentLoaded", function () {
    let currentUserId = localStorage.getItem("userCurr");

    if (!currentUserId) return;

    getUser(currentUserId, function(user) {
        if (!user || !user.coupons || user.coupons.length === 0) return;

        let suggestBox = document.getElementById("couponSuggest");
        let input = document.getElementById("couponInput");

        suggestBox.innerHTML = "";

        user.coupons.forEach(code => {
            let div = document.createElement("div");
            div.className = "coupon-item";
            div.innerText = code;
            // click → điền vào input
            div.onclick = function () {
                input.value = code;
                suggestBox.style.display = "none";
            };

            suggestBox.appendChild(div);
        });

        // focus input → hiện gợi ý
        input.addEventListener("focus", () => {
            suggestBox.style.display = "block";
        });

        // click ra ngoài → ẩn
        document.addEventListener("click", (e) => {
            if (!e.target.closest(".coupon-input-wrap")) {
                suggestBox.style.display = "none";
            }
        });
    });
});





//====MUA NGAY====
// console.log(!window.location.search.includes('id'));
if(window.location.search.includes('id')) {
    document.addEventListener("DOMContentLoaded", function () {

        // ===== LẤY PARAM =====
        function getParams() {
            const params = new URLSearchParams(window.location.search);
            return {
                id: params.get("id"),
                qty: parseInt(params.get("qty")) || 1
            };
        }

        const { id, qty } = getParams();
        displayCheckout([{ id, qty }]);

    });
}else {
    // Dùng giỏ hàng
    document.addEventListener("DOMContentLoaded", function () {

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let cartChecked = cart.filter(item => item.checked).map(item => ({ id: item.id, qty: item.qty }));
        if (cartChecked.length === 0) {
            alert("Bạn chưa chọn sản phẩm nào!");
            window.location.href = "./gioithieu.html";
            return;
        }
        // console.log(cartChecked);
        displayCheckout(cartChecked);
    });
}

function displayCheckout(cartItems) {
    
        // ===== BIẾN =====
        let currentSubtotal = 0;
        let discountAmount = 0;
        let shipFee = 14000;

        // ===== VOUCHER =====
        const vouchers = {
            "SALE10": { type: "percent", value: 10, min: 200000 },
            "BOOK20": { type: "fixed", value: 20000, min: 300000 },
            "SHIP0D": { type: "ship" },
            "FLASH30": { type: "percent", value: 30, min: 500000 }
        };

        // ===== LẤY USER (QUAN TRỌNG) =====
        let currentUserId = localStorage.getItem("userCurr");

        // if (!currentUserId) {
        //     alert("Vui lòng đăng nhập!");
        //     window.location.href = "./dangnhap.html";
        //     return;
        // }

        // 👉 DÙNG getUser (KHÔNG dùng database.users nữa)
        getUser(currentUserId, function (user) {

            console.log("USER:", user);

            if (!user) {
                alert("Không tìm thấy user!");
                return;
            }

            // ===== LẤY SẢN PHẨM =====
            cartItems.forEach(({ id, qty }) => {
                getBook(id, (product) => {
                    // const product = books.find(b => b.id == id);

                    const priceAfterDiscount = product.price * (1 - product.discount / 100);
                    currentSubtotal = priceAfterDiscount * qty;
                    // ===== HIỂN THỊ =====
                    document.querySelector(".checkout-right h3").innerText =
                        `Đơn hàng (${qty} sản phẩm)`;

                    document.querySelector(".prod-img img").src = product.image;
                    document.querySelector(".number").innerText = qty;
                    document.querySelector(".prod-desc p").innerText = product.title;

                    document.querySelector(".prod-price").innerText =
                        formatPrice(currentSubtotal);

                    updateTotal();
                })
            });
            


            // // ===== HIỂN THỊ MÃ GỢI Ý =====
            // const suggestBox = document.getElementById("couponSuggest");

            // if (user.coupons && user.coupons.length > 0) {
            //     user.coupons.forEach(code => {
            //         const span = document.createElement("span");
            //         span.innerText = code;

            //         span.onclick = () => {
            //             document.getElementById("couponInput").value = code;
            //         };

            //         suggestBox.appendChild(span);
            //     });
            // }

            // ===== ÁP MÃ =====
            document.getElementById("applyCoupon").onclick = function () {

                const code = document.getElementById("couponInput")
                    .value.trim().toUpperCase();

                if (!code) {
                    alert("Nhập mã trước!");
                    return;
                }

                if (!user.coupons || user.coupons.length === 0) {
                    alert("Bạn chưa có mã nào!");
                    return;
                }

                const userCoupons = user.coupons.map(c => c.toUpperCase());

                if (!userCoupons.includes(code)) {
                    alert("❌ Bạn chưa lưu mã này");
                    return;
                }

                const voucher = vouchers[code];

                if (!voucher) {
                    alert("❌ Mã không hợp lệ");
                    return;
                }

                // reset
                discountAmount = 0;
                shipFee = 14000;

                // ===== XỬ LÝ =====
                if (voucher.type === "percent") {
                    if (currentSubtotal < voucher.min) {
                        alert(`❌ Đơn phải từ ${formatPrice(voucher.min)}`);
                        return;
                    }
                    discountAmount = currentSubtotal * voucher.value / 100;
                }

                if (voucher.type === "fixed") {
                    if (currentSubtotal < voucher.min) {
                        alert(`❌ Đơn phải từ ${formatPrice(voucher.min)}`);
                        return;
                    }
                    discountAmount = voucher.value;
                }

                if (voucher.type === "ship") {
                    shipFee = 0;
                }

                alert("✅ Áp mã thành công!");
                updateTotal();
            };

        });

        // ===== UPDATE TOTAL =====
        function updateTotal() {
            const finalTotal = currentSubtotal - discountAmount + shipFee;

            const rows = document.querySelectorAll(".bill-detail .row");

            if (rows.length >= 2) {
                rows[0].children[1].innerText = formatPrice(currentSubtotal);
                rows[1].children[1].innerText = formatPrice(shipFee);
            }

            document.querySelector(".total-price").innerText =
                formatPrice(finalTotal);
        }

        // ===== FORMAT =====
        function formatPrice(price) {
            return Math.round(price).toLocaleString("vi-VN") + "đ";
        }
}

// Lấy nút đặt hàng
const btnOrder = document.getElementById("btnOrder");

btnOrder.addEventListener("click", function () {
    // Thông báo
    alert("Đặt hàng thành công!");

    // Chuyển trang
    window.location.href = "nguoidung.html";
});
