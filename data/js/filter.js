function toggleSection(boxId, iconId) {
    const box = document.getElementById(boxId);
    const icon = document.getElementById(iconId);

    box.classList.toggle('collapsed');

    if (box.classList.contains('collapsed')) {
        icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
    } else {
        icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
    }
}

function toggleFilter(element) {
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

    if (element.dataset.group === "NXB" && element.checked) {
        const nxbCheckboxes = document.querySelectorAll('.filter-vendor input[type="checkbox"]');
        nxbCheckboxes.forEach(cb => {
            if (cb !== element && cb.checked) {
                cb.checked = false;
                const cbIcon = cb.parentElement.querySelector('i');
                cbIcon.classList.replace('fa-solid', 'fa-regular');
                cbIcon.classList.replace('fa-circle-check', 'fa-circle');
            }
        });
    }

    const icon = element.parentElement.querySelector('i');
    if (element.checked) {
        icon.classList.replace('fa-regular', 'fa-solid');
        icon.classList.replace('fa-circle', 'fa-circle-check');
    } else {
        icon.classList.replace('fa-solid', 'fa-regular');
        icon.classList.replace('fa-circle-check', 'fa-circle');
    }
    doSearch(1);
}

function renderPagination(totalProducts, currentPage) {
    const productsPerPage = 20;
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const container = document.getElementById('dynamic-pagination');

    let html = '';

    html += `<li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                <a class="page-link" href="javascript:;" onclick="goToPage(${currentPage - 1})">«</a>
             </li>`;

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            html += `<li class="page-item ${i === currentPage ? 'active' : ''}">
                        <a class="page-link" href="javascript:;" onclick="goToPage(${i})">${i}</a>
                     </li>`;
        }
        else if (i === currentPage - 3 || i === currentPage + 3) {
            html += `<li class="page-item dots"><a class="page-link">...</a></li>`;
        }
    }

    html += `<li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
                <a class="page-link" href="javascript:;" onclick="goToPage(${currentPage + 1})">»</a>
             </li>`;

    container.innerHTML = html;
}

function goToPage(page) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    doSearch(page);
}

let allBooks = [];
let filteredBooks = [];
let currentPage = 1;
const productsPerPage = 20;

document.addEventListener('DOMContentLoaded', () => {
    getBooks((books) => {
        allBooks = books;
        filteredBooks = [...allBooks];
        doSearch(1);
    });

    const searchInput = document.querySelector('.search-box input');
    const searchIcon = document.querySelector('.search-box i');
    const suggestionBox = document.getElementById('search-suggestions');

    if (searchInput && suggestionBox) {
        searchInput.addEventListener('input', function() {
            const keyword = this.value.toLowerCase().trim();

            if (keyword.length === 0) {
                suggestionBox.style.display = 'none';
                return;
            }

            const matches = allBooks.filter(book => 
                book.title.toLowerCase().includes(keyword)
            );

            if (matches.length > 0) {
                suggestionBox.style.display = 'block';
                suggestionBox.innerHTML = matches.map(book => {
                    const price = book.price * (100 - book.discount) / 100;
                    return `
                        <a href="./item.html?id=${book.id}" class="suggestion-item">
                            <img src="${book.image}" alt="${book.title}">
                            <div class="suggestion-info">
                                <div class="suggestion-title">${book.title}</div>
                                <div class="suggestion-price">${price.toLocaleString('vi-VN')}₫</div>
                            </div>
                        </a>
                    `;
                }).join('');
            } else {
                suggestionBox.innerHTML = '<div style="padding:15px; text-align:center; color:#888;">Không tìm thấy sản phẩm</div>';
                suggestionBox.style.display = 'block';
            }
        });

        document.addEventListener('click', (e) => {
            if (!document.querySelector('.search-box').contains(e.target)) {
                suggestionBox.style.display = 'none';
            }
        });

        searchInput.addEventListener('focus', function() {
            if (this.value.trim() !== "") {
                suggestionBox.style.display = 'block';
            }
        });
    }

    if (searchInput && searchIcon) {
        const handleSearch = () => {
            suggestionBox.style.display = 'none';
            doSearch(1);
            
            const mainSection = document.getElementById('main');
            if (mainSection) {
                mainSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSearch();
        });
        searchIcon.addEventListener('click', handleSearch);
    }
});

window.doSearch = function (page = 1) {
    currentPage = page;
    const typeCheckboxes = document.querySelectorAll('.filter-type input[type="checkbox"]:checked');
    const selectedTypes = Array.from(typeCheckboxes).map(cb => cb.value);

    const vendorCheckboxes = document.querySelectorAll('.filter-vendor input[type="checkbox"]:checked');
    const selectedVendors = Array.from(vendorCheckboxes).map(cb => cb.value.toLowerCase());

    const sortCheckbox = document.querySelector('.filter-price input[type="checkbox"]:checked');
    const selectedSort = sortCheckbox ? sortCheckbox.value : null;

    const searchInput = document.querySelector('.search-box input');
    const keyword = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    filteredBooks = allBooks.filter(book => {
        let matchType = true;
        let matchVendor = true;
        let matchKeyword = true;
        
        if (keyword !== '') {
            matchKeyword = book.title.toLowerCase().includes(keyword);
        }

        if (selectedTypes.length > 0) {
            if (!book.topic || book.topic.length !== selectedTypes.length) {
                matchType = false;
            } else {
                matchType = selectedTypes.every(selected => {
                    let normSelected = selected.toLowerCase().replace(/-/g, '');
                    return book.topic.some(t => {
                        let normTopic = t.toLowerCase().replace(/-/g, '');
                        return normSelected.includes(normTopic) || normTopic.includes(normSelected);
                    });
                });
            }
        }

        if (selectedVendors.length > 0) {
            if (book.publish) {
                matchVendor = selectedVendors.some(vendor => book.publish.toLowerCase().includes(vendor));
            } else {
                matchVendor = false;
            }
        }

        return matchType && matchVendor && matchKeyword;
    });

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

    renderProducts();

    if (typeof renderPagination === 'function') {
        renderPagination(filteredBooks.length, currentPage);
    }
}

function renderProducts() {
    const listContainer = document.querySelector(".bs-content .list-item");
    if (!listContainer) return;

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

    if (paginatedBooks.length === 0) {
        listContainer.innerHTML = '<p style="text-align: center; width: 100%; padding: 50px 20px; font-size: 18px; color: #555;">Không tìm thấy sản phẩm nào phù hợp với bộ lọc và tìm kiếm.</p>';
        return;
    }

    listContainer.innerHTML = paginatedBooks.map((book) => {
        const discountedPrice = book.price * (100 - book.discount) / 100;
        const formattedPrice = discountedPrice.toLocaleString('vi-VN') + '₫';
        const formattedOldPrice = book.price.toLocaleString('vi-VN') + '₫';
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