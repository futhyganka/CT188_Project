function toggleSection(boxId, iconId) {
    const box = document.getElementById(boxId);
    const icon = document.getElementById(iconId);

    // Bật/tắt class collapsed
    box.classList.toggle('collapsed');

    // Đổi icon mũi tên linh hoạt
    if (box.classList.contains('collapsed')) {
        icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
    } else {
        icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
    }
}

function toggleFilter(element) {
    // Nếu click vào Sắp xếp, biến Checkbox thành dạng Radio (chỉ cho phép chọn 1 cái)
    if (element.dataset.group === "Sắp xếp" && element.checked) {
        const sortCheckboxes = document.querySelectorAll('.filter-price input[type="checkbox"]');
        sortCheckboxes.forEach(cb => {
            if (cb !== element && cb.checked) {
                cb.checked = false;
                const cbIcon = cb.parentElement.querySelector('i');
                cbIcon.classList.replace('fa-solid', 'fa-regular');
                cbIcon.classList.replace('fa-circle-check', 'fa-circle');
            }
        });
    }

    // Xử lý đổi icon vòng tròn khi tích chọn
    const icon = element.parentElement.querySelector('i');
    if (element.checked) {
        icon.classList.replace('fa-regular', 'fa-solid');
        icon.classList.replace('fa-circle', 'fa-circle-check');
    } else {
        icon.classList.replace('fa-solid', 'fa-regular');
        icon.classList.replace('fa-circle-check', 'fa-circle');
    }

    // Gọi hàm Tìm kiếm & Lọc (Luôn quay về trang 1 khi lọc)
    doSearch(1);
}

function renderPagination(totalProducts, currentPage) {
    const productsPerPage = 20; // Giới hạn 20 sản phẩm mỗi trang
    const totalPages = Math.ceil(totalProducts / productsPerPage); // Tính tổng số trang
    const container = document.getElementById('dynamic-pagination');

    let html = '';

    // Nút lùi (Back)
    html += `<li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                <a class="page-link" href="javascript:;" onclick="goToPage(${currentPage - 1})">«</a>
             </li>`;

    // Thuật toán hiển thị các vòng tròn số
    for (let i = 1; i <= totalPages; i++) {
        // Hiển thị trang 1, trang cuối, và các trang lân cận trang hiện tại
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            html += `<li class="page-item ${i === currentPage ? 'active' : ''}">
                        <a class="page-link" href="javascript:;" onclick="goToPage(${i})">${i}</a>
                     </li>`;
        }
        // Hiển thị dấu ba chấm nếu khoảng cách quá xa
        else if (i === currentPage - 3 || i === currentPage + 3) {
            html += `<li class="page-item dots"><a class="page-link">...</a></li>`;
        }
    }

    // Nút tiến (Next)
    html += `<li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
                <a class="page-link" href="javascript:;" onclick="goToPage(${currentPage + 1})">»</a>
             </li>`;

    container.innerHTML = html;
}

// Hàm được gọi khi người dùng bấm vào hình tròn số
function goToPage(page) {
    // 1. Cuộn lên đầu danh sách sản phẩm
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 2. Chạy lại hàm filter theo đúng trang người dùng vừa click
    doSearch(page);
}

// Khởi tạo biến toàn cục
let allBooks = [];
let filteredBooks = [];
let currentPage = 1;
const productsPerPage = 20;

// Khi trang vừa load xong, lấy dữ liệu và thiết lập sự kiện
document.addEventListener('DOMContentLoaded', () => {
    // getBooks đã được định nghĩa trong file database.js của bạn
    getBooks((books) => {
        allBooks = books;
        filteredBooks = [...allBooks];
        doSearch(1); // Load sản phẩm trang 1
    });

    // --- SỰ KIỆN CHO THANH TÌM KIẾM ---
    const searchInput = document.querySelector('.search-box input');
    const searchIcon = document.querySelector('.search-box i');

    if(searchInput && searchIcon) {
        // Lọc khi nhấn phím Enter
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault(); 
                doSearch(1); 
            }
        });

        // Lọc khi click vào icon kính lúp
        searchIcon.addEventListener('click', function() {
            doSearch(1);
        });
        
        // Cải thiện UX UX: pointer cho icon kính lúp
        searchIcon.style.cursor = "pointer";
    }
});

// Hàm chính xử lý Lọc, Sắp xếp, Tìm kiếm và Render
window.doSearch = function (page = 1) {
    currentPage = page;

    // 1. Lấy dữ liệu từ bộ lọc và ô tìm kiếm
    const typeCheckboxes = document.querySelectorAll('.filter-type input[type="checkbox"]:checked');
    const selectedTypes = Array.from(typeCheckboxes).map(cb => cb.value);

    const vendorCheckboxes = document.querySelectorAll('.filter-vendor input[type="checkbox"]:checked');
    const selectedVendors = Array.from(vendorCheckboxes).map(cb => cb.value.toLowerCase());

    const sortCheckbox = document.querySelector('.filter-price input[type="checkbox"]:checked');
    const selectedSort = sortCheckbox ? sortCheckbox.value : null;

    const searchInput = document.querySelector('.search-box input');
    const keyword = searchInput ? searchInput.value.toLowerCase().trim() : '';

    // 2. Tiến hành lọc (Filter) dữ liệu
    filteredBooks = allBooks.filter(book => {
        let matchType = true;
        let matchVendor = true;
        let matchKeyword = true;

        // Lọc theo từ khóa tìm kiếm (theo tên sách)
        if (keyword !== '') {
            matchKeyword = book.title.toLowerCase().includes(keyword);
        }

        // Lọc theo Thể loại
        if (selectedTypes.length > 0) {
            matchType = selectedTypes.some(selected => {
                let normSelected = selected.toLowerCase().replace(/-/g, '');
                return book.topic && book.topic.some(t => {
                    let normTopic = t.toLowerCase().replace(/-/g, '');
                    return normSelected.includes(normTopic) || normTopic.includes(normSelected);
                });
            });
        }

        // Lọc theo Nhà xuất bản
        if (selectedVendors.length > 0) {
            if (book.publish) {
                matchVendor = selectedVendors.some(vendor => book.publish.toLowerCase().includes(vendor));
            } else {
                matchVendor = false;
            }
        }

        return matchType && matchVendor && matchKeyword;
    });

    // 3. Tiến hành sắp xếp (Sort) dữ liệu nếu có
    if (selectedSort) {
        filteredBooks.sort((a, b) => {
            const priceA = a.price * (100 - a.discount) / 100;
            const priceB = b.price * (100 - b.discount) / 100;

            if (selectedSort === 'name_asc') return a.title.localeCompare(b.title);
            if (selectedSort === 'name_desc') return b.title.localeCompare(a.title);
            if (selectedSort === 'price_asc') return priceA - priceB;
            if (selectedSort === 'price_desc') return priceB - priceA;
        });
    }

    // 4. In sản phẩm ra màn hình
    renderProducts();

    // 5. Cập nhật lại thanh phân trang
    if (typeof renderPagination === 'function') {
        renderPagination(filteredBooks.length, currentPage);
    }
}

// Hàm đẩy HTML vào trong class .list-item
function renderProducts() {
    const listContainer = document.querySelector(".bs-content .list-item");
    if (!listContainer) return;

    // Chia mảng dữ liệu theo trang hiện tại
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

    // Nếu không có kết quả nào phù hợp
    if (paginatedBooks.length === 0) {
        listContainer.innerHTML = '<p style="text-align: center; width: 100%; padding: 50px 20px; font-size: 18px; color: #555;">Không tìm thấy sản phẩm nào phù hợp với bộ lọc và tìm kiếm.</p>';
        return;
    }

    // Đổ dữ liệu thật vào cấu trúc HTML
    // Lưu ý: Đã đổi <form> thành thẻ <a> để có thể chuyển hướng sang trang chi tiết
    listContainer.innerHTML = paginatedBooks.map((book) => {
        const discountedPrice = book.price * (100 - book.discount) / 100;

        // Định dạng giá tiền có dấu chấm (VNĐ)
        const formattedPrice = discountedPrice.toLocaleString('vi-VN') + '₫';
        const formattedOldPrice = book.price.toLocaleString('vi-VN') + '₫';
        
        // Đảm bảo object book trong database.js của bạn có trường id. Ví dụ: book.id
        const productId = book.id || '#'; 

        return `
        <div class="item">
            <a href="./item.html?id=${productId}" style="text-decoration: none; color: inherit;">
                <div class="box-item">
                    <div class="img"><img src="${book.image}" alt="${book.title}"></div>
                    <h4 class="title-item">${book.title}</h4>
                    <div class="discount">-${book.discount}%</div>
                    <div class="price">
                        <span class="price-new">${formattedPrice}</span>
                        <span class="price-old">${formattedOldPrice}</span>
                    </div>
                </div>
            </a>
        </div>`;
    }).join("");
}