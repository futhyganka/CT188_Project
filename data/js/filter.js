// Khởi tạo biến toàn cục
let allBooks = []; 
let filteredBooks = []; 
let currentPage = 1;
const productsPerPage = 20;

// Khi trang vừa load xong, lấy dữ liệu và hiển thị ngay
document.addEventListener('DOMContentLoaded', () => {
    // getBooks đã được định nghĩa trong file database.js của bạn
    getBooks((books) => {
        allBooks = books;
        filteredBooks = [...allBooks];
        doSearch(1); // Load sản phẩm trang 1
    });
});

// Hàm chính xử lý Lọc, Sắp xếp và Render
window.doSearch = function(page = 1) {
    currentPage = page;
    
    // 1. Lấy tất cả các ô checkbox đang được tích (Checked)
    const typeCheckboxes = document.querySelectorAll('.filter-type input[type="checkbox"]:checked');
    const selectedTypes = Array.from(typeCheckboxes).map(cb => cb.value); 
    
    const vendorCheckboxes = document.querySelectorAll('.filter-vendor input[type="checkbox"]:checked');
    const selectedVendors = Array.from(vendorCheckboxes).map(cb => cb.value.toLowerCase());
    
    const sortCheckbox = document.querySelector('.filter-price input[type="checkbox"]:checked');
    const selectedSort = sortCheckbox ? sortCheckbox.value : null;

    // 2. Tiến hành lọc (Filter) dữ liệu
    filteredBooks = allBooks.filter(book => {
        let matchType = true;
        let matchVendor = true;
        
        // Lọc theo Thể loại (Chấp nhận so khớp tương đối vì Value HTML và DB có thể viết khác nhau)
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
        
        return matchType && matchVendor;
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
    if(typeof renderPagination === 'function') {
        renderPagination(filteredBooks.length, currentPage);
    }
}

// Hàm đẩy HTML vào trong class .list-item
function renderProducts() {
    const listContainer = document.querySelector(".bs-content .list-item");
    if(!listContainer) return;
    
    // Chia mảng dữ liệu theo trang hiện tại
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedBooks = filteredBooks.slice(startIndex, endIndex);
    
    // Nếu không có kết quả nào phù hợp
    if (paginatedBooks.length === 0) {
        listContainer.innerHTML = '<p style="text-align: center; width: 100%; padding: 50px 20px; font-size: 18px; color: #555;">Không tìm thấy sản phẩm nào phù hợp với bộ lọc.</p>';
        return;
    }

    // Đổ dữ liệu thật vào cấu trúc HTML gốc của bạn
    listContainer.innerHTML = paginatedBooks.map((book) => {
        const discountedPrice = book.price * (100 - book.discount) / 100;
        
        // Định dạng giá tiền có dấu chấm (VNĐ)
        const formattedPrice = discountedPrice.toLocaleString('vi-VN') + '₫';
        const formattedOldPrice = book.price.toLocaleString('vi-VN') + '₫';

        return `
        <div class="item">
            <form action="">
                <div class="box-item">
                    <div class="img"><img src="${book.image}" alt="${book.title}"></div>
                    <h4 class="title-item">${book.title}</h4>
                    <div class="discount">-${book.discount}%</div>
                    <div class="price">
                        <span class="price-new">${formattedPrice}</span>
                        <span class="price-old">${formattedOldPrice}</span>
                    </div>
                </div>
            </form>
        </div>`;
    }).join("");
}