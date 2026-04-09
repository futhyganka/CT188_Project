document.addEventListener("DOMContentLoaded", function () {
    const checkAll = document.getElementById("check-all");
    const cartTable = document.querySelector(".cart-table");
    const cartBodyDropdown = document.querySelector(".cart-body");
    const badge = document.querySelector(".badge");
    const cartHeader = document.querySelector(".cart-header");

    const formatCurrency = (amount) => amount.toLocaleString("vi-VN") + "đ";

    //Lưu dữ liệu vào LocalStorage để không bị mất khi chuyển trang
    function saveCart() {
        const cartItems = [];
        const rows = document.querySelectorAll(".cart-table tbody tr");

        rows.forEach((row) => {
            cartItems.push({
                name: row.querySelector(".product-info p").innerText,
                img: row.querySelector(".book-img").src,
                priceNew: row.querySelector(".new-price").innerText,
                priceOld: row.querySelector(".old-price").innerText,
                qty: row.querySelector(".number").value,
                checked: row.querySelector(".cart-checkbox").checked,
            });
        });
        localStorage.setItem("fivehasha_cart", JSON.stringify(cartItems));
    }

    //Cập nhật giỏ hàng nhỏ ở Header
    function updateDropdown() {
        const data = JSON.parse(localStorage.getItem("fivehasha_cart")) || [];
        if (!cartBodyDropdown) return;

        cartBodyDropdown.innerHTML = "";

        data.forEach((item) => {
            const itemHTML = `
                <div class="cart-item">
                    <img src="${item.img}" alt="book">
                    <div class="item-info">
                        <p class="name">${item.name}</p>
                        <p class="price">${item.priceNew}<span>x ${item.qty}</span></p>
                    </div>
                </div>
            `;
            cartBodyDropdown.insertAdjacentHTML("beforeend", itemHTML);
        });

        if (badge) badge.innerText = data.length;
        if (cartHeader)
            cartHeader.innerText = `Giỏ hàng của tôi (${data.length} sản phẩm)`;
    }

    //Tính toán tiền nong ở trang giỏ hàng chính
    function updateCart() {
        let totalAll = 0;
        let savingAll = 0;
        const rows = document.querySelectorAll(".cart-table tbody tr");

        rows.forEach((row) => {
            const checkbox = row.querySelector(".cart-checkbox");
            const input = row.querySelector(".number");
            const priceNew = parseInt(
                row.querySelector(".new-price").innerText.replace(/\D/g, ""),
            );
            const priceOld = parseInt(
                row.querySelector(".old-price").innerText.replace(/\D/g, ""),
            );
            const qty = parseInt(input.value) || 1;

            const rowTotal = qty * priceNew;
            row.querySelector(".total-price").innerText =
                formatCurrency(rowTotal);

            if (checkbox && checkbox.checked) {
                totalAll += rowTotal;
                savingAll += (priceOld - priceNew) * qty;
            }
        });

        const finalTotal = document.querySelector(
            ".bottom-section .total span",
        );
        const savingTotal = document.querySelector(
            ".bottom-section .saving span",
        );

        if (finalTotal) finalTotal.innerText = formatCurrency(totalAll);
        if (savingTotal) savingTotal.innerText = formatCurrency(savingAll);

        saveCart();
        updateDropdown();
    }

    //Các sự kiện Click (Cộng, trừ, xóa, chọn)
    if (checkAll) {
        checkAll.addEventListener("change", function () {
            document
                .querySelectorAll(".cart-checkbox")
                .forEach((cb) => (cb.checked = checkAll.checked));
            updateCart();
        });
    }

    if (cartTable) {
        cartTable.addEventListener("click", function (e) {
            const target = e.target;
            const row = target.closest("tr");
            if (!row) return;

            if (target.classList.contains("btn-plus")) {
                row.querySelector(".number").value =
                    parseInt(row.querySelector(".number").value) + 1;
            } else if (target.classList.contains("btn-minus")) {
                const input = row.querySelector(".number");
                if (parseInt(input.value) > 1)
                    input.value = parseInt(input.value) - 1;
            } else if (target.closest(".remove")) {
                if (confirm("Xóa sản phẩm này?")) row.remove();
            } else if (target.classList.contains("cart-checkbox")) {
                const allChecked = Array.from(
                    document.querySelectorAll(".cart-checkbox"),
                ).every((cb) => cb.checked);
                if (checkAll) checkAll.checked = allChecked;
            }
            updateCart();
        });
    }

    updateCart();
});

document.addEventListener("DOMContentLoaded", function () {
    // Hàm này sẽ chạy mỗi khi trang web tải xong hoặc khi giỏ hàng thay đổi
    function handleViewMoreButton() {
        // 1. Đếm số lượng sản phẩm đang có trong giỏ hàng nhỏ
        const cartItems = document.querySelectorAll(".cart-body .cart-item");
        // 2. Tìm nút "Xem thêm"
        const viewMoreBtn = document.getElementById("view-more-cart");
        // 3. Tìm badge
        const badge = document.querySelector(".cart-btn .badge");
        const cartHeader = document.querySelector(".cart-header");

        if (viewMoreBtn) {
            if (cartItems.length >= 3) {
                // Nếu >= 3 sản phẩm thì hiện nút
                viewMoreBtn.style.display = "inline-block";
            } else {
                // Nếu dưới 3 sản phẩm thì ẩn nút
                viewMoreBtn.style.display = "none";
            }
        }

        // Cập nhật con số tượng trưng trên Badge và Header
        if (badge) badge.innerText = cartItems.length;
        if (cartHeader)
            cartHeader.innerText = `Giỏ hàng của tôi (${cartItems.length} sản phẩm)`;
    }

    // Chạy hàm kiểm tra ngay khi load trang
    handleViewMoreButton();
});


//kiểm tra đăng nhập trước khi thanh toán
document.addEventListener("DOMContentLoaded", function () {
    const checkoutButtons = document.querySelectorAll(".checkout-btn");

    checkoutButtons.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            let user = localStorage.getItem("userCurr");

            //  CHƯA ĐĂNG NHẬP
            if (!user) {
                e.preventDefault();

                // Hiện thông báo
                alert("Bạn cần đăng nhập trước khi thanh toán!");

                // Delay 1 chút cho user đọc
                setTimeout(function () {
                    window.location.href = "dangnhap.html";
                }, 800);

                return;
            }

            //  ĐÃ ĐĂNG NHẬP
            window.location.href = "thanhtoan.html";
        });
    });
});




//XỬ LÝ NÚT CHECK
document.addEventListener("DOMContentLoaded", function () {
    let userId = localStorage.getItem("userCurr");
    if (!userId) return;

    getUser(userId, function (user) {
        let cart = user.cart || [];

        const container = document.getElementById("cart-list");
        container.innerHTML = "";

        cart.forEach(item => {
            const div = document.createElement("div");

            div.innerHTML = `
                <input type="checkbox" ${item.check ? "checked" : ""}>
                <span>${item.title}</span>
                <span>${item.price}</span>
            `;

            const checkbox = div.querySelector("input");

            checkbox.addEventListener("change", function () {
                item.check = this.checked ? 1 : 0;
                setUser(user.id, { cart: cart });
            });

            container.appendChild(div);
        });

        // 👉 Nút thanh toán
        document.getElementById("goCheckout").onclick = function () {
            window.location.href = "thanhtoan.html";
        };
    });
});
