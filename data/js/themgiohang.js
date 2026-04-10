document.addEventListener("DOMContentLoaded", function () {
    // Hàm này sẽ chạy mỗi khi trang web tải xong hoặc khi giỏ hàng thay đổi

    function handleViewMoreButton() {
        // 1. Đếm số lượng sản phẩm đang có trong giỏ hàng nhỏ

        const cartItems = document.querySelectorAll(".cart-body .cart-item");

        // 2. Tìm nút "Xem thêm"

        // const viewMoreBtn = document.getElementById("view-more-cart");

        // 3. Tìm badge

        const badge = document.querySelector(".cart-btn .badge");

        const cartHeader = document.querySelector(".cart-header");

        // if (viewMoreBtn) {
        //     if (cartItems.length >= 3) {
        //         // Nếu >= 3 sản phẩm thì hiện nút

        //         viewMoreBtn.style.display = "inline-block";
        //     } else {
        //         // Nếu dưới 3 sản phẩm thì ẩn nút

        //         viewMoreBtn.style.display = "none";
        //     }
        // }

        // Cập nhật con số tượng trưng trên Badge và Header

        if (badge) badge.innerText = cartItems.length;

        if (cartHeader) cartHeader.innerText = `Giỏ hàng của tôi`;
    }

    // Chạy hàm kiểm tra ngay khi load trang

    handleViewMoreButton();
});

document.addEventListener("DOMContentLoaded", function () {
    const addBtn = document.querySelector(".btn.add");

    const qtyInput = document.querySelector(".qty");

    const urlParams = new URLSearchParams(window.location.search);

    const productId = urlParams.get("id");

    if (addBtn) {
        addBtn.addEventListener("click", function () {
            // Kiểm tra productId có tồn tại không

            if (!productId) {
                alert("Không xác định được sản phẩm!");

                return;
            }

            const quantity = parseInt(qtyInput.value) || 1;

            // Gọi hàm thêm vào giỏ

            addToCartCustom(productId, quantity);
        });
    }
});

function addToCartCustom(id, quantity) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Tìm sản phẩm trong database.js (So sánh kiểu chuỗi)

    getBooks((products) => {
        const productData = products.find((p) => String(p.id) === String(id));

        if (!productData) {
            alert("Sản phẩm không tồn tại trong hệ thống!");

            return;
        }

        const existingItem = cart.find(
            (item) => String(item.id) === String(id),
        );

        if (existingItem) {
            existingItem.qty = parseInt(existingItem.qty) + quantity;
        } else {
            cart.unshift({
                id: productData.id,

                // name: productData.title,

                // img: productData.image,

                // priceNew: productData.[new price],

                // priceOld: productData.[old price] || productData.[old price],

                qty: quantity,

                checked: true,
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        updateDropdown();

        // updateCart();

        // alert("Đã thêm vào giỏ hàng thành công!");

        if (typeof updateDropdown === "function") updateDropdown();
    });
}
