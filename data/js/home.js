const renderSections = () => {
    // 1. Cấu hình Mapping: Class trong HTML -> Tên file HTML danh mục 
    const config = [
        { topic: 'preorder',    class: 'section-pre',  file: 'danhmuctong.html' },
        { topic: 'lichsu',      class: 'section-ls',   file: 'danhmuclichsu.html' },
        { topic: 'vhvn',        class: 'section-vhvn', file: 'danhmucvhvn.html' },
        { topic: 'vhnn',        class: 'section-vhnn', file: 'danhmucvhnn.html' },
        { topic: 'truyentranh', class: 'section-tt',   file: 'danhmuctruyentranh.html' },
        { topic: 'kynang',      class: 'section-kn',   file: 'danhmuckynang.html' },
        { topic: 'khoahoc',     class: 'section-kh',   file: 'danhmuckhoahoc.html' } 
    ];

    config.forEach(item => {
        const sec = document.querySelector(`.${item.class}`);
        if (!sec) return;


        const container = sec.querySelector('.list-item');
        if (container) {
            let books = [];
            if (item.topic === 'preorder') {
                books = database.books.filter(b => b.status === "Đặt trước");
            } else {
                books = database.books.filter(b => b.topic.includes(item.topic) && b.status !== "Đặt trước");
            }
            renderList(books, container, 7);
        }

        // --- GẮN LINK XEM THÊM ---
        const btnMore = sec.querySelector('.btn-more');
        if (btnMore) {
            btnMore.style.cursor = 'pointer';
            btnMore.onclick = () => window.location.href = item.file;
        }
    });

    initSliders(); // Kích hoạt nút trượt
};

function renderList(books, container, limit) {
    if (books.length === 0) {
        container.innerHTML = `<p style="padding:20px; color:#888;">Đang cập nhật...</p>`;
        return;
    }
    container.innerHTML = books.slice(0, limit).map(book => {
        const discount = book.discount || 0;
        const finalPrice = book.price * (1 - discount / 100);
        return `
            <div class="item" onclick="window.location.href='./item.html?id=${book.id}'">
                <form>
                    <div class="box-item">
                        <div class="img"><img src="${book.image}" alt=""></div>
                        <h4 class="title-item">${book.title}</h4>
                        ${discount > 0 ? `<div class="discount">-${discount}%</div>` : ''}
                        <div class="price">
                            <span class="price-new">${finalPrice.toLocaleString()}₫</span>
                            ${discount > 0 ? `<span class="price-old">${book.price.toLocaleString()}₫</span>` : ''}
                        </div>
                    </div>
                </form>
            </div>`;
    }).join("");
}

function initSliders() {
    document.querySelectorAll('.content').forEach(content => {
        const list = content.querySelector('.list-item');
        const btnLeft = content.querySelector('.btn-slider-left');
        const btnRight = content.querySelector('.btn-slider-right');
        if (list && btnLeft && btnRight) {
            btnRight.onclick = () => list.scrollBy({ left: 350, behavior: 'smooth' });
            btnLeft.onclick = () => list.scrollBy({ left: -350, behavior: 'smooth' });
        }
    });
}

document.addEventListener("DOMContentLoaded", renderSections);