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
        alert('Bạn cần đăng nhập trước khi thanh toán!');
        window.location.href = './dangnhap.html';
        // console.log("Không tìm thấy user");
        // return;
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

// ===== BIẾN =====
let currentSubtotal = 0;
let discountAmount = 0;
let shipFee = 14000;



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
        // Lấy nút đặt hàng
        const btnOrder = document.getElementById("btnOrder");

        btnOrder.addEventListener("click", function () {
            handleOrder([{ id, qty }]);
        });
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

        // Lấy nút đặt hàng
        const btnOrder = document.getElementById("btnOrder");

        btnOrder.addEventListener("click", function () {
            
            cart = cart.filter(item => item.checked !== true);

            localStorage.setItem('cart', JSON.stringify(cart));

            handleOrder(cartChecked);
        });

    });
}

function displayCheckout(cartItems) {

    if(cartItems.length === 0) {
        alert('Chưa có sản phẩm trong giỏ hàng');
        window.location.href = "./gioithieu.html";
        return;
    }

    


    // ===== VOUCHER =====
    const vouchers = {
        "SALE10": { type: "percent", value: 10, min: 200000 },
        "BOOK20": { type: "fixed", value: 20000, min: 300000 },
        "SHIP0D": { type: "ship" },
        "FLASH30": { type: "percent", value: 30, min: 500000 }
    };

    // ===== LẤY USER (QUAN TRỌNG) =====
    let currentUserId = localStorage.getItem("userCurr");

    
    getUser(currentUserId, function (user) {

        console.log("USER:", user);

        if (!user) {
            alert('Bạn cần đăng nhập trước khi thanh toán!');
            window.location.href = './dangnhap.html';
            // alert("Không tìm thấy user!");
            // return;
        }

        // ===== LẤY SẢN PHẨM =====
        let boxProducts = document.querySelector('.products');
        boxProducts.innerHTML = "";
        cartItems.forEach(({ id, qty }) => {
            
            getBook(id, (product) => {

                const priceAfterDiscount = product.price * (1 - product.discount / 100);
                let priceCurr = priceAfterDiscount * qty;

                boxProducts.innerHTML += `<div class="product-summary">
                    <div class="prod-img">
                        <img src="${product.image}"/>
                        <span class="number">${qty}</span>
                    </div>
                    <div class="prod-desc">
                        <p>
                            ${product.title}
                        </p>
                    </div>
                    <div class="prod-price">${formatPrice(priceCurr)}</div>
                </div>`
                
                // document.querySelector(".checkout-right h3").innerText =
                //     `Đơn hàng (${} sản phẩm)`;

                // document.querySelector(".prod-img img").src = ;
                // document.querySelector(".number").innerText = qty;
                // document.querySelector(".prod-desc p").innerText = ;

                // document.querySelector(".prod-price").innerText =
                //     ;
                currentSubtotal += priceCurr;
                
            })
        });
        updateTotal()
        

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
                alert(" Bạn chưa lưu mã này");
                return;
            }

            const voucher = vouchers[code];

            if (!voucher) {
                alert(" Mã không hợp lệ");
                return;
            }

            // reset
            discountAmount = 0;
            shipFee = 14000;

            // ===== XỬ LÝ =====
            if (voucher.type === "percent") {
                if (currentSubtotal < voucher.min) {
                    alert(` Đơn phải từ ${formatPrice(voucher.min)}`);
                    return;
                }
                discountAmount = currentSubtotal * voucher.value / 100;
            }

            if (voucher.type === "fixed") {
                if (currentSubtotal < voucher.min) {
                    alert(` Đơn phải từ ${formatPrice(voucher.min)}`);
                    return;
                }
                discountAmount = voucher.value;
            }

            if (voucher.type === "ship") {
                shipFee = 0;
            }

            alert(" Áp mã thành công!");
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
// xử lý đặt hàng
function handleOrder(cartItems) {
    let userId = localStorage.getItem("userCurr");

    if (!userId) {
        alert("Vui lòng đăng nhập!");
        return;
    }

    // ===== LẤY USER =====
    getUser(userId, function (user) {
        if (!user) {
            // 
            alert('Bạn cần đăng nhập trước khi thanh toán!');
            window.location.href = './dangnhap.html';
        }

        // ===== LẤY CART =====

        if (cartItems.length === 0) {
            alert("Bạn chưa chọn sản phẩm!");
            return;
        }

        // ===== TẠO ID ĐƠN =====
        let now = new Date();
        let orderId =
            now.getHours().toString().padStart(2, "0") +
            now.getMinutes().toString().padStart(2, "0") +
            now.getSeconds().toString().padStart(2, "0") +
            now.getMilliseconds();

        // ===== FORMAT NGÀY =====
        let date = now.toLocaleDateString("vi-VN");

        // ===== TẠO DANH SÁCH SẢN PHẨM =====
        let products = cartItems.map(item => ({
            id: item.id,
            quantity: item.qty
        }));

        // ===== TẠO ĐƠN HÀNG =====
        let order = {
            id: orderId,
            user: user.id,
            email:document.getElementById("email").value,
            name:document.getElementById("fullname").value,
            phone:document.getElementById("phone").value,
            address:document.getElementById("address").value,
            date: date,
            product: products,
            discount: discountAmount, // bạn có thể gán từ voucher
            status: "Chờ xử lý",
            ship: shipFee
        };

        // ===== LƯU ĐƠN HÀNG =====
        createOrder(order, function () {

            // ===== CẬP NHẬT USER =====
            let updatedOrders = user.order || [];
            updatedOrders.push(orderId);

            setUser(user.id, { order: updatedOrders }, function () {



                alert("Đặt hàng thành công!");

                // ===== CHUYỂN TRANG =====
                window.location.href = "nguoidung.html";
            });
        });
    });
}





