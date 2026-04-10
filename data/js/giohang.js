// document.addEventListener("DOMContentLoaded", function () {
//     // Hàm này sẽ chạy mỗi khi trang web tải xong hoặc khi giỏ hàng thay đổi

//     function handleViewMoreButton() {
//         // 1. Đếm số lượng sản phẩm đang có trong giỏ hàng nhỏ

//         const cartItems = document.querySelectorAll(".cart-body .cart-item");

//         // 2. Tìm nút "Xem thêm"

//         // const viewMoreBtn = document.getElementById("view-more-cart");

//         // 3. Tìm badge

//         const badge = document.querySelector(".cart-btn .badge");

//         const cartHeader = document.querySelector(".cart-header");

//         // if (viewMoreBtn) {
//         //     if (cartItems.length >= 3) {
//         //         // Nếu >= 3 sản phẩm thì hiện nút

//         //         viewMoreBtn.style.display = "inline-block";
//         //     } else {
//         //         // Nếu dưới 3 sản phẩm thì ẩn nút

//         //         viewMoreBtn.style.display = "none";
//         //     }
//         // }

//         // Cập nhật con số tượng trưng trên Badge và Header

//         if (badge) badge.innerText = cartItems.length;

//         if (cartHeader) cartHeader.innerText = `Giỏ hàng của tôi`;
//     }

//     // Chạy hàm kiểm tra ngay khi load trang

//     handleViewMoreButton();
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const addBtn = document.querySelector(".btn.add");

//     const qtyInput = document.querySelector(".qty");

//     const urlParams = new URLSearchParams(window.location.search);

//     const productId = urlParams.get("id");

//     if (addBtn) {
//         addBtn.addEventListener("click", function () {
//             // Kiểm tra productId có tồn tại không

//             if (!productId) {
//                 alert("Không xác định được sản phẩm!");

//                 return;
//             }

//             const quantity = parseInt(qtyInput.value) || 1;

//             // Gọi hàm thêm vào giỏ

//             addToCartCustom(productId, quantity);
//         });
//     }
// });

// function addToCartCustom(id, quantity) {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     // Tìm sản phẩm trong database.js (So sánh kiểu chuỗi)

//     getBooks((products) => {
//         const productData = products.find((p) => String(p.id) === String(id));

//         if (!productData) {
//             alert("Sản phẩm không tồn tại trong hệ thống!");

//             return;
//         }

//         const existingItem = cart.find(
//             (item) => String(item.id) === String(id),
//         );

//         if (existingItem) {
//             existingItem.qty = parseInt(existingItem.qty) + quantity;
//         } else {
//             cart.unshift({
//                 id: productData.id,

//                 // name: productData.title,

//                 // img: productData.image,

//                 // priceNew: productData.[new price],

//                 // priceOld: productData.[old price] || productData.[old price],

//                 qty: quantity,

//                 checked: true,
//             });
//         }

//         localStorage.setItem("cart", JSON.stringify(cart));

//         updateDropdown();

//         // updateCart();

//         // alert("Đã thêm vào giỏ hàng thành công!");

//         if (typeof updateDropdown === "function") updateDropdown();
//     });
// }

// giohang chính

function renderCartTable() {
    // Gọi getBooks để lấy dữ liệu thực tế từ database

    getBooks((productsData) => {
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];

        const tableBody = document.getElementById("cart-items-body");

        if (!tableBody) return;

        tableBody.innerHTML = "";

        if (cartData.length === 0) {
            tableBody.innerHTML =
                '<tr><td colspan="6" style="text-align:center; padding: 20px;">Giỏ hàng trống</td></tr>';
            updateCart();
            return;
        }

        cartData.forEach((item) => {
            // 1. Tìm sản phẩm (Giữ nguyên hoặc sửa productsData thành database.books tùy file của bạn)

            const info = productsData.find(
                (p) => String(p.id) === String(item.id),
            );

            if (info) {
                // --- DÒNG CẦN SỬA/THÊM MỚI Ở ĐÂY ---

                const giaGoc = info.price || 0;

                const phanTramGiam = info.discount || 0;

                const giaHienTai = (giaGoc * (100 - phanTramGiam)) / 100;

                const thanhTien = giaHienTai * item.qty;

                // ----------------------------------

                const rowHTML = `

            <tr data-id="${info.id}">
               

                <td>
                    <input type="checkbox" 
                    class="cart-checkbox" 
                    ${item.checked ? "checked" : ""} 
                    onchange="updateCheckedStatus('${info.id}', this.checked)" />
                </td>
                <td class="product-info">

                    <img src="${info.image}" class="book-img" style="width:70px" />

                    <p>${info.title}</p>

                </td>

                <td class="price">

                    <span class="new-price" style="color:red; font-weight:bold;">${giaHienTai.toLocaleString()}₫</span><br />

                    <span class="old-price" style="text-decoration:line-through; color:gray;">${giaGoc.toLocaleString()}₫</span>

                </td>

                <td class="quantity">

                    <div class="quantity-group">

                        <button class="btn-minus" onclick="updateQty('${info.id}', -1)">-</button>

                        <input class="number" type="text" value="${item.qty}" readonly />

                        <button class="btn-plus" onclick="updateQty('${info.id}', 1)">+</button>

                    </div>

                </td>

                <td class="total-price" style="color:red; font-weight:bold;">${thanhTien.toLocaleString()}₫</td>

                <td class="remove">

                    <button type="button" class="btn-remove-item" onclick="removeItem('${info.id}')">

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </td>

            </tr>`;

                tableBody.insertAdjacentHTML("beforeend", rowHTML);
                // Kiểm tra xem tất cả các sản phẩm có đang được check hay không
                const allChecked =
                    cartData.length > 0 &&
                    cartData.every((item) => item.checked);
                if (checkAll) {
                    checkAll.checked = allChecked;
                }
            }
        });

        updateCart(); // Tính lại tiền sau khi vẽ xong
    });
}

document.addEventListener("DOMContentLoaded", function () {
    renderCartTable();
});

// nút xoá

function updateQty(id, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Tìm vị trí sản phẩm trong giỏ
    const itemIndex = cart.findIndex((item) => String(item.id) === String(id));

    if (itemIndex !== -1) {
        // Cập nhật số lượng
        cart[itemIndex].qty = parseInt(cart[itemIndex].qty) + change;

        // Nếu số lượng nhỏ hơn 1 thì xóa luôn hoặc giữ tối thiểu là 1
        if (cart[itemIndex].qty < 1) {
            if (confirm("Bạn muốn xóa sản phẩm này khỏi giỏ hàng?")) {
                cart.splice(itemIndex, 1);
            } else {
                cart[itemIndex].qty = 1;
            }
        }

        // Lưu lại vào localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Vẽ lại bảng và cập nhật dropdown header
        renderCartTable();
        updateDropdown();
    }
}
function removeItem(id) {
    if (confirm("Xác nhận xóa sản phẩm này?")) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Lọc bỏ sản phẩm
        cart = cart.filter((item) => String(item.id) !== String(id));

        // Lưu lại
        localStorage.setItem("cart", JSON.stringify(cart));

        // Cập nhật giao diện
        renderCartTable();
        updateDropdown();
    }
}

function updateCart() {
    getBooks((productsData) => {
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
        let totalAll = 0;
        let savingAll = 0;

        cartData.forEach((item) => {
            const info = productsData.find(
                (p) => String(p.id) === String(item.id),
            );
            if (info && item.checked) {
                const giaGoc = info.price || 0;
                const phanTramGiam = info.discount || 0;
                const giaBan = (giaGoc * (100 - phanTramGiam)) / 100;

                totalAll += giaBan * item.qty;
                savingAll += (giaGoc - giaBan) * item.qty;
            }
        });

        // Hiển thị ra giao diện (HTML của bạn dùng class .total và .saving)
        const totalEl = document.querySelector(".summary-box .total");
        const savingEl = document.querySelector(".summary-box .saving");

        if (totalEl)
            totalEl.innerHTML = `Tổng thanh toán: <span>${totalAll.toLocaleString()}₫</span>`;
        if (savingEl)
            savingEl.innerHTML = `Bạn tiết kiệm được: <span>${savingAll.toLocaleString()}₫</span>`;
    });
}

// checked
function updateCheckedStatus(id, isChecked) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Tìm sản phẩm trong giỏ hàng và cập nhật thuộc tính checked
    const itemIndex = cart.findIndex((item) => String(item.id) === String(id));

    if (itemIndex !== -1) {
        cart[itemIndex].checked = isChecked;

        // Lưu lại vào localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Tính toán lại tổng tiền ở phía dưới
        updateCart();
    }
}

if (checkAll) {
    checkAll.addEventListener("change", function () {
        // 1. Lấy trạng thái hiện tại của nút Check All (true hoặc false)
        const isChecked = checkAll.checked;

        // 2. Lấy dữ liệu giỏ hàng từ LocalStorage
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // 3. Duyệt qua từng sản phẩm trong giỏ hàng và gán lại trạng thái checked
        cart.forEach((item) => {
            item.checked = isChecked;
        });

        // 4. Lưu mảng mới đã cập nhật lại vào LocalStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // 5. Vẽ lại bảng để cập nhật các checkbox con trên giao diện
        renderCartTable();
    });

}


