// document.addEventListener("DOMContentLoaded", function () {

const checkAll = document.getElementById("check-all");

const cartTable = document.querySelector(".cart-table");

const cartBodyDropdown = document.querySelector(".cart-body");

const badge = document.querySelector(".badge");

const cartHeader = document.querySelector(".cart-header");

const cartTotal = document.querySelector(".cart-footer .total");

const formatCurrency = (amount) => amount.toLocaleString("vi-VN") + "đ";

//Lưu dữ liệu vào LocalStorage để không bị mất khi chuyển trang

// function saveCart() {

//     const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

//     const rows = document.querySelectorAll(".cart-table tbody tr");

//     rows.forEach((row) => {

//         cartItems.push({

//             name: row.querySelector(".product-info p").innerText,

//             img: row.querySelector(".book-img").src,

//             priceNew: row.querySelector(".new-price").innerText,

//             priceOld: row.querySelector(".old-price").innerText,

//             qty: row.querySelector(".number").value,

//             checked: row.querySelector(".cart-checkbox").checked,

//         });

//     });

//     localStorage.setItem("cart", JSON.stringify(cartItems));

// }

//Cập nhật giỏ hàng nhỏ ở Header

function updateDropdown() {
    const data = JSON.parse(localStorage.getItem("cart")) || [];

    if (!cartBodyDropdown) return;

    if (badge) badge.innerText = data.length;
    cartBodyDropdown.innerHTML = "";

    let total = 0;

    let totalSaving = 0; // THÊM DÒNG NÀY

    data.forEach(({ id, qty }, i) => {
        getBook(id, (item) => {
            const giaGoc = item.price || 0;

            const phanTramGiam = item.discount || 0;

            const giaBan = giaGoc * (1 - phanTramGiam / 100);

            const itemHTML = `

                <div class="cart-item">

                    <img src="${item.image}" alt="book">

                    <div class="item-info">

                        <p class="name">${item.title}</p>

                        <p class="price">${formatCurrency(giaBan)}<span>x ${qty}</span></p>

                    </div>

                </div>`;

            if (i < 3) cartBodyDropdown.innerHTML += itemHTML;

            // TÍNH TOÁN

            total += giaBan * qty;

            totalSaving += (giaGoc - giaBan) * qty; // CỘNG DỒN TIỀN TIẾT KIỆM

            // Cập nhật hiển thị vào cart-footer

            // if (cartTotal) {
            //     cartTotal.innerHTML = `

            //         <div class="summary-line">TỔNG TIỀN: <span>${formatCurrency(total)}</span></div>

            //         <div class="summary-line saving-text">Bạn đã tiết kiệm được: <span>${formatCurrency(totalSaving)}</span></div>

            //     `;
            // }
        });
    });

    if (badge) badge.innerText = data.length;

    if (cartHeader) cartHeader.innerText = `Giỏ hàng của tôi`;
}

// Tính toán tiền nong ở trang giỏ hàng chính

// function updateCart() {

//     let totalAll = 0;

//     let savingAll = 0;

//     const rows = document.querySelectorAll(".cart-table tbody tr");

//     rows.forEach((row) => {

//         const checkbox = row.querySelector(".cart-checkbox");

//         const input = row.querySelector(".number");

//         const priceNew = parseInt(

//             row.querySelector(".new-price").innerText.replace(/\D/g, ""),

//         );

//         const priceOld = parseInt(

//             row.querySelector(".old-price").innerText.replace(/\D/g, ""),

//         );

//         const qty = parseInt(input.value) || 1;

//         const rowTotal = qty * priceNew;

//         row.querySelector(".total-price").innerText = formatCurrency(rowTotal);

//         if (checkbox && checkbox.checked) {

//             totalAll += rowTotal;

//             savingAll += (priceOld - priceNew) * qty;

//         }

//     });

//     const finalTotal = document.querySelector(".bottom-section .total span");

//     const savingTotal = document.querySelector(".bottom-section .saving span");

//     if (finalTotal) finalTotal.innerText = formatCurrency(totalAll);

//     if (savingTotal) savingTotal.innerText = formatCurrency(savingAll);

//     // saveCart();

//     updateDropdown();

// }

//Các sự kiện Click (Cộng, trừ, xóa, chọn)

// if (checkAll) {
//     checkAll.addEventListener("change", function () {
//         document

//             .querySelectorAll(".cart-checkbox")

//             .forEach((cb) => (cb.checked = checkAll.checked));

//         updateCart();
//     });
// }

// if (cartTable) {
//     cartTable.addEventListener("click", function (e) {
//         const target = e.target;

//         const row = target.closest("tr");

//         if (!row) return;

//         if (target.classList.contains("btn-plus")) {
//             row.querySelector(".number").value =
//                 parseInt(row.querySelector(".number").value) + 1;
//         } else if (target.classList.contains("btn-minus")) {
//             const input = row.querySelector(".number");

//             if (parseInt(input.value) > 1)
//                 input.value = parseInt(input.value) - 1;
//         } else if (target.closest(".remove")) {
//             if (confirm("Xóa sản phẩm này?")) row.remove();
//         } else if (target.classList.contains("cart-checkbox")) {
//             const allChecked = Array.from(
//                 document.querySelectorAll(".cart-checkbox"),
//             ).every((cb) => cb.checked);

//             if (checkAll) checkAll.checked = allChecked;
//         }

// updateCart();
// });
// }

updateDropdown();

// updateCart();

// });
