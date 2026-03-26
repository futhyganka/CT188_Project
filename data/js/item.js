// ===== LẤY ID =====
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// kiểm tra id
if (!id) {
    alert("Không tìm thấy sản phẩm!");
    window.location.href = "index.html";
}

// ===== LẤY DATA TỪ DATABASE =====
const book = database.books.find(b => b.id === id);

if (!book) {
    alert("Sản phẩm không tồn tại!");
    window.location.href = "index.html";
}

// render
renderBook(book);
loadRelatedBooks(book);
renderReviews(book.review);

function renderReviews(reviews) {
    const container = document.querySelector(".evaluate .rating");

    if (!reviews || reviews.length === 0) {
        container.innerHTML = "<p>Chưa có đánh giá nào cho cuốn sách này.</p>";
        return;
    }

    // Tính điểm trung bình dựa trên trường 'star'
    const totalStar = reviews.reduce((acc, curr) => acc + curr.star, 0);
    const avgStar = (totalStar / reviews.length).toFixed(1);

    // Tạo HTML cho danh sách các nhận xét
    const reviewsHTML = reviews.map(rev => `
        <div class="review-item" style="border-bottom: 1px dashed #ccc; padding: 15px 0;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                <span style="color: #f39c12; font-weight: bold;">
                    ${"★".repeat(rev.star)}${"☆".repeat(5 - rev.star)}
                </span>
                <strong style="color: #333;">Khách hàng</strong>
            </div>
            <p style="margin: 0; color: #555; font-style: italic;">"${rev.info}"</p>
        </div>
    `).join("");

    // Render toàn bộ vào section .evaluate
    container.innerHTML = `
        <div class="rating-header" style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px; background: #f9f9f9; padding: 15px; border-radius: 8px;">
            <div style="text-align: center;">
                <div style="font-size: 3rem; font-weight: bold; color: #e74c3c; line-height: 1;">${avgStar}</div>
                <div style="color: #777;">trên 5</div>
            </div>
            <div>
                <div style="color: #f39c12; font-size: 1.2rem;">${"★".repeat(Math.round(avgStar))}${"☆".repeat(5 - Math.round(avgStar))}</div>
                <div style="color: #888;">(${reviews.length} lượt đánh giá)</div>
            </div>
        </div>
        <div class="reviews-list">
            ${reviewsHTML}
        </div>
    `;
}

// ===== RENDER BOOK =====
function renderBook(book) {

    document.querySelector(".main-img").src = book.image;

    document.querySelector(".main .title").innerText = book.title;

    const discount = book.discount || 0;
    const newPrice = book.price * (100 - discount) / 100;

    document.querySelector(".main .price .new").innerText =
        newPrice.toLocaleString() + "đ";

    document.querySelector(".main .price .old").innerText =
        book.price.toLocaleString() + "đ";

    document.querySelector(".author").innerText =
        book.author?.join(", ") || "Đang cập nhật";

    document.querySelector(".size").innerText = book.size || "-";
    document.querySelector(".type").innerText = book.format || "-";
    document.querySelector(".date").innerText = book.date || "-";
    document.querySelector(".weight").innerText = book.weight || "-";
    document.querySelector(".publish").innerText = book.publish || "-";

    document.querySelector(".desc").innerHTML = book.description || "";
}

// ===== RELATED =====
function loadRelatedBooks(currentBook) {

    const related = database.books.filter(book =>
        book.id !== currentBook.id &&
        book.topic &&
        currentBook.topic &&
        book.topic.some(t => currentBook.topic.includes(t))
    );

    renderRelatedBooks(related);
}

// ===== RENDER RELATED =====
function renderRelatedBooks(books) {
    const container = document.querySelector(".related");

    if (!books.length) {
        container.innerHTML = "<p>Không có sách liên quan</p>";
        return;
    }

    container.innerHTML = books.slice(0, 8).map(book => {

        const discount = book.discount || 0;
        const newPrice = book.price * (100 - discount) / 100;

        return `
        <div class="item" onclick="goToDetail('${book.id}')">
            <img src="${book.image}" alt="${book.title}">
            
            <h4>${book.title}</h4>

            <div class="price">
                <span class="new">${newPrice.toLocaleString()}đ</span>
                ${
                    discount > 0
                    ? `<span class="old">${book.price.toLocaleString()}đ</span>`
                    : ""
                }
            </div>

            ${
                discount > 0
                ? `<span class="discount">-${discount}%</span>`
                : ""
            }
        </div>
        `;
    }).join("");
}
// ==== XEM THÊM (Liên kết tới trang danh mục riêng) ===//
function setupSeeMoreLink(book) {
    const seeMoreBtn = document.getElementById("seeMoreLink");
    if (!seeMoreBtn) return;

    // 1. Bảng tra cứu: Topic trong data -> File HTML tương ứng
    const categoryFiles = {
        'lichsu': 'danhmuclichsu.html',
        'vhvn': 'danhmucvhvn.html',
        'vhnn': 'danhmucvhnn.html',
        'truyentranh': 'danhmuctruyentranh.html', // Tên file theo hình ảnh ông gửi
        'kynang': 'danhmuckynang.html',
        'khoahoc': 'danhmuckhoahoc.html'
    };

    // 2. Kiểm tra topic của sách hiện tại
    if (book && book.topic && book.topic.length > 0) {
        // Lấy topic đầu tiên của sách (ví dụ: 'lichsu')
        const currentTopic = book.topic[0]; 

        // Nếu tìm thấy file tương ứng trong bảng tra cứu thì gắn link
        if (categoryFiles[currentTopic]) {
            seeMoreBtn.href = categoryFiles[currentTopic];
        } else {
            // Nếu không khớp cái nào thì về trang tổng
            seeMoreBtn.href = "danhmuckhoahoc.html"; 
        }
    } else {
        seeMoreBtn.href = "danhmuckhoahoc.html";
    }
}

// Gọi hàm 
setupSeeMoreLink(book);

// ===== CHUYỂN TRANG =====
function goToDetail(id) {
    window.location.href = `item.html?id=${id}`;
}